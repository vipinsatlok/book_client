import { cookies } from "next/headers";
import Cookies from "js-cookie";

export const getCookie = (type: "front" | "server") => {
  let token: string;
  if (type === "front") {
    token = Cookies.get("token");
  } else {
    const cookieStore = cookies();
    token = cookieStore.get("token")?.value as string;
  }

  return token ? token : null;
};
