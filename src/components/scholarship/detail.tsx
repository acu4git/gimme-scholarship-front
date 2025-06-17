import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Scholarship } from "@/types/scholarship/scholarship";

const ScholarshipDetail = ({ detail }: { detail: Scholarship }) => {
  const linkText = "大学HP";
  const linkUrl =
    "https://www.kit.ac.jp/campus_index/life_fee/scholarship/minkanscholarship/";
  const parts = detail.remark.split(linkText);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white hover:cursor-pointer">
          詳細を見る
        </Button>
      </DialogTrigger>
      <DialogContent className="h-2/3 sm:max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle>{detail.name}</DialogTitle>
        </DialogHeader>
        <div className="overflow-scroll whitespace-pre-line grid grid-cols-1 sm:overflow-auto sm:grid-cols-2 lg:grid-cols-3 text-xs gap-2">
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">対象</p>
            <p className="p-2">{detail.target_detail}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">形式</p>
            <p className="p-2">{detail.type_detail}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">金額</p>
            <p className="p-2">{detail.amount_detail}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">定員</p>
            <p className="p-2">
              {detail.capacity_detail == "" ? "不明" : detail.capacity_detail}
            </p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">住所</p>
            <p className="p-2">{detail.address}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">
              担当窓口
            </p>
            <p className="p-2">{detail.contact_point}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">締切日</p>
            <p className="p-2">{detail.deadline_detail}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">掲示日</p>
            <p className="p-2">{detail.posting_date}</p>
          </div>
          <div className="border rounded-2xl col-span-1">
            <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">備考</p>
            {/* <p className="p-2">{detail.remark}</p> */}
            <p className="p-2">
              {parts.map((part, index) => (
                <span key={index}>
                  {part}
                  {index < parts.length - 1 && (
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {linkText}
                    </a>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="hover:cursor-pointer bg-white hover:bg-accent"
            >
              閉じる
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScholarshipDetail;
