"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UpdateEventById } from "@/services/EventService";
import NextButton from "@/components/shared/NextButton";
import { toast } from "sonner";
import Image from "next/image";
import { IEvent } from "@/app/types";

interface FormValues {
  title?: string;
  description?: string;
  startDate?: Date;
  startTime?: string;
  endDate?: Date;
  endTime?: string;
  venue?: string;
  isPaid?: boolean;
  fee?: number;
  bannerImage?: FileList;
  eventStatus?: "UPCOMING" | "ONGOING" | "ENDED";
  reseveredSit?: number;
  availableSit?: number;
}

const UpdateEvent = ({ event }: { event: IEvent }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const [previewUrl, setPreviewUrl] = useState<string | null>(event.bannerImage || null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  // Initialize form values
  useEffect(() => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);

    setValue("startDate", start);
    setValue(
      "startTime",
      `${start.getHours().toString().padStart(2, "0")}:${start
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
    );

    setValue("endDate", end);
    setValue(
      "endTime",
      `${end.getHours().toString().padStart(2, "0")}:${end
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
    );

    setValue("title", event.title);
    setValue("description", event.description);
    setValue("venue", event.venue);
    setValue("isPaid", event.isPaid);
    setValue("fee", event.fee);
    setValue("eventStatus", event.eventStatus);
    setValue("reseveredSit", event.reseveredSit);
    setValue("availableSit", event.availableSit);
  }, [event, setValue]);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const combineDateTime = (date: Date, time: string): Date => {
    const [hours, minutes] = time.split(":").map(Number);
    const newDate = new Date(date);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    return newDate;
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      const startDateTime = combineDateTime(data.startDate!, data.startTime!);
      const endDateTime = combineDateTime(data.endDate!, data.endTime!);

      const payload = {
        ...data,
        startDate: startDateTime.toISOString(),
        endDate: endDateTime.toISOString(),
        fee: data.fee ? Number(data.fee) : 0,
        reseveredSit: data.reseveredSit ? Number(data.reseveredSit) : 0,
        availableSit: data.availableSit ? Number(data.availableSit) : 0,
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(payload));
      if (data.bannerImage?.[0]) {
        formData.append("file", data.bannerImage[0]);
      }

      const res = await UpdateEventById(event.id!, formData);

      if (res.success) {
        toast.success(res.message || "Event updated successfully");
        router.push(`/events/${res.data.slug}`);
      } else {
        toast.error(res.message || "Failed to update event");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to update event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="grid grid-cols-1 gap-6 mb-12">
          {/* Basic Info */}
          <div className="border shadow-md rounded-xl">
            <div className="px-6 py-4 text-2xl font-semibold border-b text-[#1E3A8A]">
              Basic Info
            </div>
            <div className="p-6 space-y-5">
              <Input {...register("title")} placeholder="Event Title" />
              <Textarea {...register("description")} rows={6} placeholder="Event Description" />
              <div className="flex flex-col gap-4">
                {/* Start Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-md font-medium text-[#475569]">Start Date</label>
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => setValue("startDate", date as Date)}
                    className="border rounded-md shadow-sm"
                    classNames={{
                      day_selected: "bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]",
                      day_today: "text-[#1E3A8A] font-bold",
                    }}
                  />
                  <Input type="time" {...register("startTime")} />
                </div>
                {/* End Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-md font-medium text-[#475569]">End Date</label>
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => setValue("endDate", date as Date)}
                    className="border rounded-md shadow-sm"
                    classNames={{
                      day_selected: "bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]",
                      day_today: "text-[#1E3A8A] font-bold",
                    }}
                  />
                  <Input type="time" {...register("endTime")} />
                </div>
              </div>
              <Input {...register("venue")} placeholder="Venue" />
            </div>
          </div>

          {/* Price Details */}
          {watch("isPaid") && (
            <div className="border shadow-md rounded-xl">
              <div className="px-6 py-4 text-xl font-semibold border-b text-[#1E3A8A]">
                Price Details
              </div>
              <div className="p-6">
                <Input type="number" {...register("fee")} placeholder="Fee (BDT)" />
              </div>
            </div>
          )}

          {/* Banner */}
          <div className="border shadow-md rounded-xl">
            <div className="px-6 py-4 text-xl font-semibold border-b text-[#1E3A8A]">Event Banner</div>
            <div className="p-6">
              <Input type="file" accept="image/*" {...register("bannerImage")} onChange={onImageChange} />
              {previewUrl && (
                <Image
                  src={previewUrl}
                  alt="Event Banner Preview"
                  width={5000}
                  height={5000}
                  className="object-cover w-full mt-4 border rounded-md max-h-52"
                />
              )}
            </div>
          </div>

          {/* Event Status */}
          <div className="border shadow-md rounded-xl">
            <div className="px-6 py-4 text-xl font-semibold border-b text-[#1E3A8A]">Event Status</div>
            <div className="p-6">
              <Select
                defaultValue={event.eventStatus}
                onValueChange={(value) => setValue("eventStatus", value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UPCOMING">Upcoming</SelectItem>
                  <SelectItem value="ONGOING">Ongoing</SelectItem>
                  <SelectItem value="ENDED">Ended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seats Details */}
          <div className="border shadow-md rounded-xl">
            <div className="px-6 py-4 text-xl font-semibold border-b text-[#1E3A8A]">Seats Details</div>
            <div className="p-6 space-y-5">
              <Input type="number" {...register("reseveredSit")} placeholder="Reserved Seats" />
              <Input type="number" {...register("availableSit")} placeholder="Available Seats" />
            </div>
          </div>

          <NextButton name="Update Event" disabled={loading} />
        </div>
      </form>
    </div>
  );
};

export default UpdateEvent;
