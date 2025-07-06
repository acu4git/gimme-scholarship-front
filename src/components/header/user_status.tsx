"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { UpdateUser } from "@/lib/api/user";
import { useActionState, useEffect } from "react";

const UserStatus = () => {
  const { user } = useUser();
  const [state, formAction] = useActionState(UpdateUser, null);

  useEffect(() => {
    if (state?.message) {
      alert(state.message);
    }
  }, [state]);

  if (!user)
    return (
      <div className="flex gap-3 px-3">
        <Button
          onClick={() => redirect("/sign-in")}
          variant="outline"
          size="lg"
          className="bg-white text-blue-500 border border-blue-500 hover:text-blue-700 hover:cursor-pointer"
        >
          ログイン
        </Button>
        <Button
          onClick={() => redirect("/sign-up")}
          variant="outline"
          size="lg"
          className="text-white bg-emerald-300 hover:bg-emerald-500 hover:text-accent hover:cursor-pointer"
        >
          新規登録
        </Button>
      </div>
    );

  return (
    <div className="px-5">
      {/* <UserButton imageUrl={user.imageUrl} userId={user.id} /> */}
      <div className="flex flex-col justify-center items-center">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "64px",
                height: "64px",
              },
            },
          }}
        >
          <UserButton.UserProfilePage
            url="/others"
            label="その他"
            labelIcon={<span>📝</span>}
          >
            <header className="pb-3 border-b-1">
              <p className="text-lg font-bold">その他</p>
            </header>
            <form action={formAction} className="font-bold text-sm">
              <div className="flex gap-3 py-3 border-b-1">
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
              <div className="flex flex-row gap-3 py-3 border-b-1">
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
              <div className="flex flex-row gap-3 py-3 border-b-1">
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
              <div className="flex justify-between mt-3">
                <Button
                  variant="outline"
                  className="bg-white hover:cursor-pointer"
                >
                  更新する
                </Button>
              </div>
            </form>
          </UserButton.UserProfilePage>
        </UserButton>
      </div>
    </div>
  );
};

export default UserStatus;
