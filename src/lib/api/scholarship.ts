import { Scholarship } from "@/types/scholarship/scholarship";
import { apiBaseUrl } from "@/lib/api/common";

export async function fetchScholarships(queryParams: {
  [key: string]: string | string[] | undefined;
}): Promise<Scholarship[]> {
  const searchParams = new URLSearchParams(
    Object.entries(queryParams).map(([k, v]) => [k, v!.toString()])
  );
  try {
    const apiUrl = new URL("/scholarships", apiBaseUrl);
    apiUrl.search = searchParams.toString();
    console.log(apiUrl);
    const res = await fetch(apiUrl);
    const data: Scholarship[] = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
