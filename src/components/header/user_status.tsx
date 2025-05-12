"use client";

import UserButton from "@/components/header/user_button";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const UserStatus = () => {
  const { user } = useUser();

  if (!user)
    return (
      <div className="flex gap-3 px-3">
        <Button
          asChild
          variant="outline"
          className="bg-white text-blue-500 border border-blue-500"
        >
          <SignInButton>ログイン</SignInButton>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="text-white bg-emerald-300"
        >
          <SignUpButton>新規登録</SignUpButton>
        </Button>
        {/* <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-white text-blue-500 border border-blue-500"
        >
          <Link href="sign-in">ログイン</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="text-white bg-emerald-300"
        >
          <Link href="sign-up">新規登録</Link>
        </Button> */}
      </div>
    );

  return (
    <div className="px-5">
      <UserButton imageUrl={user.imageUrl} userId={user.id} />
    </div>
  );
};

export default UserStatus;
