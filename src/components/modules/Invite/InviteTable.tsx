"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import NextButton from "@/components/shared/NextButton";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { sendInvitation } from "@/services/InviteService";
import { getAllUsers } from "@/services/UserService";

interface IUser {
  id: string;
  email: string;
  name: string;
  profileImage: string;
}

interface InviteUserTableProps {
  eventId: string;
}

const InviteUserTable = ({ eventId }: InviteUserTableProps) => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const Users = await getAllUsers();

        if (!Users.success) {
          toast.error(Users.message || "Failed to fetch users");
          return;
        }

        setUsers(Users.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleInvite = async (inviteReceiverId: string, email: string) => {
    if (user?.email === email) {
      toast.error("You can't invite yourself");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        inviteReceiverId,
        eventId,
      };

      const res = await sendInvitation(payload);

      if (!res.success) {
        toast.error(res.message || "Failed to send invitation");
      } else {
        toast.success(res.message || "Invitation sent successfully");
      }
    } catch (error) {
      toast.error("Error sending invitation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full overflow-x-auto border-t border-gray-200 rounded-lg shadow-md">
      <table className="min-w-[700px] w-full text-left text-base">
        <thead className="text-sm font-medium text-gray-600 uppercase border-b border-gray-300">
          <tr>
            <th className="px-4 py-3 border">Name</th>
            <th className="px-4 py-3 border">Email</th>
            <th className="px-4 py-3 text-center border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-gray-200">
              <td className="px-4 py-4 flex items-center gap-4 border">
                <Image
                  src={
                    u.profileImage?.startsWith("http")
                      ? u.profileImage
                      : "https://res.cloudinary.com/dhl04adhz/image/upload/v1742656837/Zayed%20Iqbal-Zayed%40Iqbal.com.jpg"
                  }
                  alt={u.name}
                  width={80}
                  height={80}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {u.name}
              </td>

              <td className="px-4 py-4 border">{u.email}</td>

              <td className="px-4 py-4 border">
                <div className="flex items-center justify-center">
                  <NextButton
                    disabled={loading}
                    onClick={() => handleInvite(u.id, u.email)}
                    name={loading ? "Sending..." : "Invite"}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InviteUserTable;
