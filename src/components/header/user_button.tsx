"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

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
        <DropdownMenuItem asChild className="hover:cursor-pointer">
          <Link href={`/users/${userId}`}>マイページ</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="hover:cursor-pointer">
          <SignOutButton>
            <p>ログアウト</p>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
