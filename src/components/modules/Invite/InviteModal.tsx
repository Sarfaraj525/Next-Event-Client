// components/InviteModal.tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import NextButton from "@/components/shared/NextButton";
import InviteUserTable from "./InviteTable";
import Title from "@/components/shared/Title";

export const InviteModal = ({ id }: { id: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <NextButton name="Invite" />
      </DialogTrigger>

      <DialogContent
        className="
          w-full max-w-4xl mx-auto max-h-[70vh] overflow-auto
          bg-gradient-to-br from-[#E3F2FD] via-[#BBDEFB] to-[#29B6F6]
          rounded-xl shadow-xl
        "
      >
        <DialogHeader>
          <DialogTitle>
            <Title title="Send Invitation" />
          </DialogTitle>
        </DialogHeader>

        <InviteUserTable eventId={id} />

        <DialogFooter className="flex items-center justify-center mt-8 mb-10">
          <DialogClose asChild>
            <NextButton name="Cancel" />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
