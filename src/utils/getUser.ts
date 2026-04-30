import { cookies } from "next/headers";

interface User {
  name: string;
  role: "admin" | "student";
}

export const getUser = async (): Promise<User | null> => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");
  if (!userCookie) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(userCookie.value));
  } catch (error) {
    console.error("Failed to parse user cookie", error);
    return null;
  }
};
