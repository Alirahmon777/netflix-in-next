"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname == "/") {
    router.push("/home");
  }

  return <div>page</div>;
};

export default page;
