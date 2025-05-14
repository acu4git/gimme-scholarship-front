import { Scholarship } from "@/types/scholarship/scholarship";

const apiBaseUrl = process.env.API_BASE_URL ?? "http://localhost:8080";

export default async function fetchScholarships(queryParams: {
  [key: string]: string | string[] | undefined;
}): Promise<Scholarship[]> {
  const searchParams = new URLSearchParams(
    Object.entries(queryParams).map(([k, v]) => [k, v!.toString()])
  );
  try {
    const res = await fetch(
      `${apiBaseUrl}/scholarships?${searchParams.toString()}`,
      { cache: "no-store" }
    );
    const data: Scholarship[] = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
