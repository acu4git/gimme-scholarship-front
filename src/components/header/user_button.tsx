"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";

const UserButton = ({
  imageUrl,
  userId,
}: {
  imageUrl: string;
  userId: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={imageUrl}
          width={60}
          height={60}
          alt="user"
          className="rounded-full border-2 border-amber-300 cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/users/${userId}`}>マイページ</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <SignOutButton>ログアウト</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
