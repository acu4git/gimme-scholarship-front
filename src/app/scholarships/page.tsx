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
import Form from "next/form";

const ScholarshipsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const scholarships = await fetchScholarships(await searchParams);
  return (
    <div className="text-stone-600">
      <div className="flex justify-center py-3">
        <Form action="" className="flex flex-col gap-2">
          <div className="flex gap-2">
            <label className="font-bold">対象</label>
            <select name="target" id="target-select" className="bg-white">
              <option value="">すべて</option>
              <option value="学部生">学部生</option>
              <option value="大学院生">大学院生</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div className="flex gap-2">
            <label className="font-bold">形式</label>
            <select name="type" id="type-select" className="bg-white">
              <option value="">すべて</option>
              <option value="給付">給付</option>
              <option value="貸与">貸与</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-white px-5 py-2 rounded-lg font-bold hover:cursor-pointer hover:text-accent-foreground"
          >
            検索
          </button>
        </Form>
      </div>
      <div className="flex justify-center my-5">
        <p className="font-extrabold text-2xl md:text-4xl">
          奨学金一覧({scholarships.length}件)
        </p>
      </div>
      <div className="h-full flex justify-center">
        <ul className="w-3/4 md:w-2/3 xl:w-1/2 flex flex-col justify-center gap-5 mb-10">
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
                  <Button className="bg-white text-black hover:bg-slate-100 hover:cursor-pointer">
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
