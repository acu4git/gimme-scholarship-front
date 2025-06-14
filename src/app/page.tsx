"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
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
    <>
      <div className="h-[90vh]">
        <div className="text-stone-600 flex justify-center">
          <div className="flex flex-col justify-center font-sans gap-10 px-5 sm:px-20 md:px-30 lg:px-40 xl:px-60 mb-7">
            <p className="flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold pt-15">
              あなたに合った
              <br />
              奨学金を
            </p>
            <p className="flex-wrap text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              KITクレクレ奨学金とは、京都工芸繊維大学の学生(大学院生も)を対象とした奨学金情報へのアクセスをより便利にしたアプリです。
            </p>
          </div>
        </div>
        <Image
          className="mx-auto mb-5"
          src="/zenigeba.svg"
          alt="Gimme a lot of money"
          width={300}
          height={300}
        />
        <div className="flex justify-center">
          <Button
            onClick={handleClick}
            disabled={isLoading}
            variant="outline"
            size="lg"
            className="text-lg bg-white hover:cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                読み込み中...
              </>
            ) : (
              "奨学金を探す"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
