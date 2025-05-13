"use client";

import UserButton from "@/components/header/user_button";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const UserStatus = () => {
  const { user } = useUser();

  if (!user)
    return (
      <div className="flex gap-3 px-3">
        <SignInButton mode="modal">
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-blue-500 border border-blue-500 hover:text-blue-700 hover:cursor-pointer"
          >
            ログイン
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button
            variant="outline"
            size="lg"
            className="text-white bg-emerald-300 hover:bg-emerald-500 hover:text-accent hover:cursor-pointer"
          >
            新規登録
          </Button>
        </SignUpButton>
      </div>
    );

  return (
    <div className="px-5">
      <UserButton imageUrl={user.imageUrl} userId={user.id} />
    </div>
  );
};

export default UserStatus;
