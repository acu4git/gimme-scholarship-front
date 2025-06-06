"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const LoginRequriredAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        className="bg-amber-300 text-white hover:cursor-pointer hover:bg-amber-400 hover:text-accent"
      >
        <Button variant="outline">お気に入り登録</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>ちょっと待って💦</AlertDialogTitle>
          <AlertDialogDescription>
            お気に入り登録するにはログインする必要があります．
            <br />
            ログインすると他にも便利な機能が利用できるかもね．
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white text-black hover:cursor-pointer">
            キャンセル
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-emerald-400 text-white hover:cursor-pointer hover:bg-emerald-600"
            onClick={() => {
              redirect("/sign-in");
            }}
          >
            ログインする
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginRequriredAlert;
