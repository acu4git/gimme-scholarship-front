import UserStatus from "./user_status";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-amber-300 h-[10vh] flex items-center justify-between bg-white">
      <Link
        href="/"
        className="bg-amber-300 self-stretch flex items-center px-3"
      >
        <h2 className="font-bold sm:text-lg md:text-2xl lg:text-3xl text-white font-sans">
          KITクレクレ奨学金
        </h2>
      </Link>
      <UserStatus />
    </header>
  );
};

export default Header;
