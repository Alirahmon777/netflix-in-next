"use client";
import { usePathname, useRouter } from "next/navigation";

function usePageLogic() {
  const pathname = usePathname();
  const router = useRouter();

  return { pathname, router };
}

export default usePageLogic;
