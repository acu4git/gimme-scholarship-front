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

const FavoriteButton = ({ info }: { info: Scholarship }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(info.is_favorite);
  const { isSignedIn } = useUser();

  const toggleFavorite = async () => {
    const res = await (isFavorite
      ? deleteFavoriteScholarship(info.id)
      : postFavoriteScholarship(info.id));
    if (res.success) {
      if (isFavorite) {
        toast("お気に入り解除しました");
      } else {
        toast("お気に入り登録しました");
      }
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <>
      {isSignedIn ? (
        <Button
          onClick={toggleFavorite}
          variant="outline"
          className={
            isFavorite
              ? "bg-stone-600 text-white hover:cursor-pointer hover:bg-black hover:text-accent"
              : "bg-amber-300 text-white hover:cursor-pointer hover:bg-amber-400 hover:text-accent"
          }
        >
          {isFavorite ? <p>お気に入り解除</p> : <p>お気に入り登録</p>}
        </Button>
      ) : (
        <LoginRequriredAlert />
      )}
    </>
  );
};

export default FavoriteButton;
