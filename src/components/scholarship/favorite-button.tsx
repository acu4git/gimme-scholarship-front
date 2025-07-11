"use client";

import { Button } from "@/components/ui/button";
import { Scholarship } from "@/types/scholarship/scholarship";
import { useUser } from "@clerk/nextjs";
import LoginRequriredAlert from "@/components/scholarship/alert";
import { useState } from "react";
import {
  deleteFavoriteScholarship,
  postFavoriteScholarship,
} from "@/lib/api/scholarship";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const FavoriteButton = ({ info }: { info: Scholarship }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(info.is_favorite);
  const { isSignedIn } = useUser();

  const toggleFavorite = async () => {
    setIsLoading(true);
    const res = await (isFavorite
      ? deleteFavoriteScholarship(info.id)
      : postFavoriteScholarship(info.id));
    if (res.success) {
      toast(isFavorite ? "お気に入り解除しました" : "お気に入り登録しました", {
        description: info.name,
      });
      setIsFavorite(!isFavorite);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isSignedIn ? (
        <Button
          onClick={toggleFavorite}
          disabled={isLoading}
          variant="outline"
          className={
            isFavorite
              ? "bg-stone-600 text-white hover:cursor-pointer hover:bg-black hover:text-accent"
              : "bg-amber-300 text-white hover:cursor-pointer hover:bg-amber-400 hover:text-accent"
          }
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              処理中...
            </>
          ) : isFavorite ? (
            <p>お気に入り解除</p>
          ) : (
            <p>お気に入り登録</p>
          )}
        </Button>
      ) : (
        <LoginRequriredAlert />
      )}
    </>
  );
};

export default FavoriteButton;
