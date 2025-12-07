import Image from "next/image";
import { Star, Pencil, Trash } from "lucide-react";

interface ReviewCardProps {
  name: string;
  title: string;
  rating: number;
  review: string;
  image?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ReviewCard({
  name,
  title,
  rating,
  review,
  image = "/placeholder.svg?height=80&width=80",
  onEdit,
  onDelete,
}: ReviewCardProps) {
  return (
    <div className="max-w-md w-full mx-auto p-4 sm:p-6 rounded-lg shadow-md relative">
      {/* Dotted background */}
      <div className="absolute inset-0 bg-[url('/dots-pattern.png')] opacity-10 z-0 rounded-lg" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="text-gray-700">FEED</span>
            <span className="text-cyan-500">BACK</span>
          </h1>
        </div>

        {/* Avatar */}
        <div className="flex justify-center -mb-10 relative z-20">
          <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md">
            <div className="w-full h-full rounded-full bg-cyan-100 flex items-center justify-center">
              <Image
                src={image}
                alt={name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#0a3b5e] text-white p-6 pt-14 rounded-lg shadow-lg">
          {/* Name + Title */}
          <div className="text-center mb-2">
            <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-300">{title}</p>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={
                  star <= rating
                    ? "fill-yellow-400 text-yellow-600"
                    : "fill-gray-400 text-gray-500"
                }
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-center text-sm text-gray-300 mb-4">{review}</p>

          {/* Actions */}
          <div className="flex justify-between items-center gap-2 text-xs mt-4">
            <button
              onClick={onEdit}
              className="flex items-center gap-1 px-3 py-1 border border-white rounded-full hover:bg-white hover:text-[#0a3b5e] transition"
            >
              <Pencil size={14} /> Edit
            </button>

            <button
              onClick={onDelete}
              className="flex items-center gap-1 px-3 py-1 border border-white rounded-full hover:bg-red-100 hover:text-red-700 transition"
            >
              <Trash size={14} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
