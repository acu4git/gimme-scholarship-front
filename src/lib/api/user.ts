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
