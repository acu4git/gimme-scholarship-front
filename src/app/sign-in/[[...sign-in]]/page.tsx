import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
