import Link from "next/link";
import UserStatus from "./user_status";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b-2 border-amber-300 bg-white">
      <div className="mx-auto flex h-full w-full max-w-4xl flex-row items-center justify-between">
        <Link
          href="/"
          className="flex items-center self-stretch border-l-8 border-amber-500 bg-amber-300 px-3"
        >
          <h2 className="font-sans font-bold text-white md:text-2xl">
            KITクレクレ奨学金
          </h2>
        </Link>
        <UserStatus />
      </div>
    </header>
  );
};

export default Header;
