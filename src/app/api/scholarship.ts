import { Scholarship } from "@/types/scholarship";

const apiBaseUrl = process.env.API_HOST ?? "http://localhost:8080";

export default async function fetchScholarships(): Promise<Scholarship[]> {
  try {
    const res = await fetch(`${apiBaseUrl}/scholarships`);
    const data: Scholarship[] = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    const dummy: Scholarship[] = [
      {
        id: 1,
        name: "テスト奨学金",
        address: "兵庫県尼崎市1-1-4",
        targets: ["大学生", "大学院生"],
        target_detail: "対象の詳細",
        amount_detail: "月額100円",
        type_detail: "給付",
        capacity_detail: "10名",
        deadline: "2025-5-22",
        deadline_detail: "令和7年5月22日",
        contact_point: "学務課",
        remark: "",
        posting_date: "2025-5-13",
      },
      {
        id: 2,
        name: "テスト奨学金",
        address: "兵庫県尼崎市1-1-4",
        targets: ["大学生", "大学院生"],
        target_detail: "対象の詳細",
        amount_detail: "月額100円",
        type_detail: "給付",
        capacity_detail: "10名",
        deadline: "2025-5-22",
        deadline_detail: "令和7年5月22日",
        contact_point: "学務課",
        remark: "",
        posting_date: "2025-5-13",
      },
      {
        id: 3,
        name: "テスト奨学金",
        address: "兵庫県尼崎市1-1-4",
        targets: ["大学生", "大学院生"],
        target_detail: "対象の詳細",
        amount_detail: "月額100円",
        type_detail: "給付",
        capacity_detail: "10名",
        deadline: "2025-5-22",
        deadline_detail: "令和7年5月22日",
        contact_point: "学務課",
        remark: "",
        posting_date: "2025-5-13",
      },
    ];
    return dummy;
  }
}
