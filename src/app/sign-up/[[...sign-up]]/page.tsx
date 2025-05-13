import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <SignUp />
    </div>
  );
}
