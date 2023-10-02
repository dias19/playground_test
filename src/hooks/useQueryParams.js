"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const queryParams = searchParams;

  const urlSearchParams = new URLSearchParams(searchParams.toString());

  const action = searchParams.get("action");

  function setQueryParams(params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        urlSearchParams.set(key, String(value));
      } else {
        urlSearchParams.delete(key);
      }
    });
    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  const getQueryParams = (param) => searchParams.get(param);

  return {
    queryParams,
    action,
    setQueryParams,
    getQueryParams,
  };
};
