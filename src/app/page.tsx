"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Top() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    router.push("/scholarships");
  };
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-16 gap-y-6 p-4 lg:grid-cols-2">
      <div className="flex flex-col text-4xl text-nowrap sm:text-6xl">
        <h1 className="text-start font-light">
          <span className="border-l-10 border-l-amber-300 pl-3 font-light">
            あなたに合った
          </span>
          <br />
          <span className="border-l-10 border-l-transparent pl-3 font-bold">
            奨学金
          </span>
          を
        </h1>
      </div>

      <p className="max-w-md p-3 font-serif text-lg font-medium">
        KITクレクレ奨学金とは、京都工芸繊維大学の学生(大学院生も)を対象とした奨学金情報へのアクセスをより便利にしたアプリです。
      </p>
      <Image
        src="/zenigeba.svg"
        alt="Zenigeba"
        width={160}
        height={160}
        className="mx-auto"
      />
      <Button
        onClick={handleClick}
        disabled={isLoading}
        variant="outline"
        className="flex h-16 w-full bg-white text-lg font-bold hover:cursor-pointer lg:col-start-2"
      >
        {isLoading ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <ArrowRight className="size-5" />
        )}
        <span className="ml-2">奨学金を探す</span>
      </Button>
    </div>
  );
}
