"use server";

import { Scholarship } from "@/types/scholarship/scholarship";
import { apiBaseUrl } from "@/lib/api/common";
import { auth } from "@clerk/nextjs/server";

export async function fetchScholarships(queryParams: {
  [key: string]: string | string[] | undefined;
}): Promise<Scholarship[]> {
  const { getToken } = await auth();
  const token = await getToken();

  const searchParams = new URLSearchParams(
    Object.entries(queryParams).map(([k, v]) => [k, v!.toString()])
  );
  try {
    const apiUrl = new URL("/scholarships", apiBaseUrl);
    apiUrl.search = searchParams.toString();
    const requestOption = token
      ? {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {};
    const res = await fetch(apiUrl, requestOption);
    const data: Scholarship[] = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function postFavoriteScholarship(id: number) {
  const { getToken } = await auth();
  const token = await getToken();

  console.log(`token: ${token}`);

  if (!token) {
    return { success: false, message: "Token required" };
  }

  try {
    const apiUrl = new URL(`/scholarships/${id}/favorite`, apiBaseUrl);
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      const errData = await res.json();
      console.error("API Error:", res.status, errData);
      return {
        success: false,
        message: `${errData.message || "Unknown error"}`,
      };
    }
    return { success: true, message: "Posted successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  }
}

export async function deleteFavoriteScholarship(id: number) {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    return { success: false, message: "Token required" };
  }

  try {
    const apiUrl = new URL(`/scholarships/${id}/favorite`, apiBaseUrl);
    const res = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      const errData = await res.json();
      console.error("API Error:", res.status, errData);
      return {
        success: false,
        message: `${errData.message || "Unknown error"}`,
      };
    }
    return { success: true, message: "Deleted successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  }
}
