import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Form from "next/form";
import { Button } from "@/components/ui/button";

const OnBoardingPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const emailAddress = user.emailAddresses.find(
    (e) => e.id === user.primaryEmailAddressId
  )?.emailAddress;

  return (
    <div className="flex justify-center">
      <Form className="bg-white mt-15 px-5 sm:px-15 py-5 sm:py-10 rounded-xl">
        <p className="underline font-bold mb-5 text-xl">初期設定</p>
        <div className="flex justify-between gap-5 my-5">
          <label>Email</label>
          <input
            name="email"
            defaultValue={emailAddress}
            type="email"
            disabled
            className="border border-black hover:cursor-not-allowed"
          />
        </div>
        <div className="flex justify-between gap-5 my-5">
          <label>学部/院</label>
          <div className="flex flex-row gap-5">
            <div>
              <input
                type="radio"
                id="levelChoice1"
                name="level"
                value="大学生"
                required
              />
              <label htmlFor="levelChoice1">大学生</label>
            </div>
            <div>
              <input
                type="radio"
                id="levelChoice2"
                name="level"
                value="大学院生"
                required
              />
              <label htmlFor="levelChoice2">大学院生</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 my-5">
          <label>学年</label>
          <select name="grade" className="border border-black">
            <option disabled hidden value="">
              選択してください
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="flex justify-between gap-5 my-5">
          <label>メール通知</label>
          <div className="flex flex-row gap-5">
            <div>
              <input
                type="radio"
                id="acceptChoice1"
                name="accept_email"
                value="希望する"
                required
              />
              <label htmlFor="acceptChoice1">希望する</label>
            </div>
            <div>
              <input
                type="radio"
                id="acceptChoice2"
                name="accept_email"
                value="希望しない"
                required
              />
              <label htmlFor="acceptChoice2">希望しない</label>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="mt-5 bg-blue-500 text-white  hover:cursor-pointer hover:bg-blue-700 hover:text-accent"
          >
            登録する
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default OnBoardingPage;
