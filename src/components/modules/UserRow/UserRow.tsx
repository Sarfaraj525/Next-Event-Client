"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { UserRowProps } from "@/app/types/userRowProps";

const roleColors: Record<string, string> = {
  admin: "bg-blue-100 text-blue-700 hover:bg-black hover:text-white",
  moderator: "bg-purple-100 text-purple-700 hover:bg-black hover:text-white",
  user: "bg-orange-100 text-orange-700 hover:bg-black hover:text-white",
};

const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700 hover:bg-black hover:text-white",
  Inactive: "bg-red-100 text-red-700 hover:bg-black hover:text-white",
};

const UserRow = ({
  id,
  name,
  email,
  role,
  status,
  isSelected,
  onSelect,
}: UserRowProps) => {
  return (
    <div className="grid grid-cols-11 py-3 px-4 items-center border-b hover:bg-gray-50">
      
      {/* Checkbox */}
      <div className="col-span-1">
        <Checkbox checked={isSelected} onCheckedChange={() => onSelect(id)} />
      </div>

      {/* User Info */}
      <div className="col-span-4">
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-gray-500">{email}</span>
        </div>
      </div>

      {/* Role */}
      <div className="col-span-2">
        <Badge className={`text-xs capitalize transition-colors ${roleColors[role]}`}>
          {role}
        </Badge>
      </div>

      {/* Status */}
      <div className="col-span-2">
        <Badge className={`text-xs capitalize transition-colors ${statusColors[status]}`}>
          {status}
        </Badge>
      </div>

      {/* Actions */}
      <div className="col-span-2 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="bg-blue-100 text-blue-700 hover:bg-black hover:text-white"
        >
          Edit
        </Button>

        <Button variant="ghost" size="sm" className="text-gray-500">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UserRow;
