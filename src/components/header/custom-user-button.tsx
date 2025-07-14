"use client";

import { UpdateUser } from "@/lib/api/user";
import { UserButton } from "@clerk/nextjs";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const CustomUserButton = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: {
            width: "48px",
            height: "48px",
            marginRight: "0.5rem",
          },
        },
      }}
    >
      <UserButton.UserProfilePage
        url="/others"
        label="その他"
        labelIcon={<span>📝</span>}
      >
        <header className="border-b-1 pb-3">
          <p className="text-lg font-bold">その他</p>
        </header>
        <UserProfileForm />
      </UserButton.UserProfilePage>
    </UserButton>
  );
};

export default CustomUserButton;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      variant="outline"
      className="bg-white hover:cursor-pointer"
    >
      {pending ? "更新中..." : "更新する"}
    </Button>
  );
};

const UserProfileForm = () => {
  const [state, formAction] = useActionState(UpdateUser, null);

  useEffect(() => {
    if (state?.message) {
      alert(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="text-sm font-bold">
      <div className="flex gap-3 border-b-1 py-3">
        <label>所属</label>
        <div className="flex flex-row gap-5">
          <div>
            <input
              type="radio"
              id="levelChoice1"
              name="level"
              value="学部生"
              required
            />
            <label htmlFor="levelChoice1">学部</label>
          </div>
          <div>
            <input
              type="radio"
              id="levelChoice2"
              name="level"
              value="大学院生"
              required
            />
            <label htmlFor="levelChoice2">院</label>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 border-b-1 py-3">
        <label>学年</label>
        <select name="grade" required className="border border-black">
          <option hidden value="">
            選択してください
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="flex flex-row gap-3 border-b-1 py-3">
        <label>メール通知</label>
        <div className="flex flex-row gap-5">
          <div>
            <input
              type="radio"
              id="acceptChoice1"
              name="accept_email"
              value="true"
              required
            />
            <label htmlFor="acceptChoice1">希望する</label>
          </div>
          <div>
            <input
              type="radio"
              id="acceptChoice2"
              name="accept_email"
              value="false"
              required
            />
            <label htmlFor="acceptChoice2">希望しない</label>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <SubmitButton />
      </div>
    </form>
  );
};
