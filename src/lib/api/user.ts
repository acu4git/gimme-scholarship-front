"use server";

import { apiBaseUrl } from "@/lib/api/common";
import { auth } from "@clerk/nextjs/server";

export const CreateUser = async (formData: FormData) => {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    return { message: "failed to find JWT token", success: false };
  }

  // const email = formData.get("email") as string;
  // const level = formData.get("level") as string;
  // const grade = formData.get("grade") as string;
  // const acceptEmail = formData.get("accept_email") as string;

  // console.log({ email, level, grade, acceptEmail });

  console.log(formData);

  const apiUrl = new URL("/users", apiBaseUrl);

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ body }),
      body: formData,
    });

    console.log(await res.text());

    if (res.status === 201) {
      console.log("created user successfully!");
      return res;
    } else {
      const resJson = await res.json();
      resJson.success = res.ok ? true : false;
      return resJson;
    }
  } catch (err) {
    console.error(err);
    return { message: "fetch error", success: false };
  }
};

export const UpdateUser = async (
  prevState: { message: string } | null,
  formData: FormData
): Promise<{ message: string } | null> => {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    return { message: "failed to find JWT token" };
  }

  const level = formData.get("level")?.toString() || "";
  const grade = formData.get("grade")?.toString() || "";
  const accept_email = formData.get("accept_email") as string;

  console.log("所属:", level);
  console.log("学年:", grade);
  console.log(
    "メール通知:",
    accept_email === "true" ? "希望する" : "希望しない"
  );

  const apiUrl = new URL("/users", apiBaseUrl);

  try {
    const res = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ body }),
      body: formData,
    });

    console.log(await res.text());

    if (res.status === 204) {
      return {
        message: `更新しました！\n\n現在のあなたの情報\n所属: ${level}\n学年: ${grade}\nメール通知: ${
          accept_email === "true" ? "希望する" : "希望しない"
        }`,
      };
    } else {
      const resJson = await res.json();
      resJson.success = res.ok ? true : false;
      return { message: resJson.toString() };
    }
  } catch (err) {
    console.error(err);
    return { message: "更新に失敗しました" };
  }
};
