import fetchScholarships from "@/app/api/scholarship";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const ScholarshipsPage = async () => {
  const scholarships = await fetchScholarships();
  return (
    <div className="text-stone-600">
      <div className="flex justify-center my-5">
        <p className="font-extrabold text-4xl">
          奨学金一覧({scholarships.length}件)
        </p>
      </div>
      <div className="h-full flex justify-center">
        <ul className="w-3/4 md:w-2/3 xl:w-1/2 flex flex-col justify-center gap-3">
          {scholarships.map((row, index) => (
            <Card key={row.id} className="border shadow-2xl">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-md md:text-lg xl:text-2xl">
                      {index + 1}件目：{row.name}
                    </CardTitle>
                    <div className="flex flex-row gap-1">
                      {row.targets.map((t) => (
                        <Badge key={`${row.id}-${t}`} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-white text-black hover:bg-slate-100">
                    ☆
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-line grid grid-cols-2 lg:grid-cols-4 text-xs gap-2">
                  <div className="border rounded-2xl col-span-1">
                    <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">
                      金額
                    </p>
                    <p className="p-2">{row.amount_detail}</p>
                  </div>
                  <div className="border rounded-2xl col-span-1">
                    <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">
                      形式
                    </p>
                    <p className="p-2">{row.type_detail}</p>
                  </div>
                  <div className="border rounded-2xl col-span-1">
                    <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">
                      定員
                    </p>
                    <p className="p-2">
                      {row.capacity_detail == "" ? "不明" : row.capacity_detail}
                    </p>
                  </div>
                  <div className="border rounded-2xl col-span-1">
                    <p className="font-bold text-xs pl-2 pt-2 ml-2 underline">
                      締切日
                    </p>
                    <p className="p-2">
                      {row.deadline == "9999-12-31" ? "不明" : row.deadline}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white"
                >
                  <Link href={`/scholarships/${row.id}`} className="font-bold">
                    詳細を見る
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScholarshipsPage;
