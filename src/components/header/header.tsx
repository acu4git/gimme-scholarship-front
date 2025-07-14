import Link from "next/link";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import CustomUserButton from "./custom-user-button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b-2 border-amber-300 bg-white">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-row items-center justify-between">
        <Link
          href="/"
          className="flex items-center self-stretch border-l-8 border-amber-500 bg-amber-300 px-3"
        >
          <h2 className="font-sans text-xl font-bold text-white md:text-2xl">
            KITクレクレ奨学金
          </h2>
        </Link>
        <SignedOut>
          {/* Mobile */}
          <div className="mr-2 sm:hidden">
            <MenuButton />
          </div>
          {/* PC */}
          <div className="mr-2 hidden flex-row items-center gap-3 sm:flex">
            <Button
              asChild
              variant="outline"
              className="border border-blue-500 bg-white text-blue-500 hover:cursor-pointer hover:text-blue-700"
            >
              <Link href="/sign-in">ログイン</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hover:text-accent bg-emerald-400 font-bold text-white hover:cursor-pointer hover:bg-emerald-500"
            >
              <Link href="/sign-up">新規登録</Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <CustomUserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;

const MenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Menu className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-1 pr-8 pl-4">
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="flex flex-row items-center gap-3"
          >
            <Link href="/sign-in">
              <LogIn className="size-5" />
              <span className="text-lg font-light">ログイン</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="flex flex-row items-center gap-3"
          >
            <Link href="/sign-up">
              <UserPlus className="size-5" />
              <span className="text-lg font-light">新規登録</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
