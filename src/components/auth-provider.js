import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./global-provider";
import { useRouter } from "next/router";

export function AuthProvider({ children }) {
  const { globalData, updateToken } = useContext(GlobalContext);

  const token = globalData.token;

  console.log(token);

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
}
