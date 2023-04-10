"use client";

import React from "react";
import usePageLogic from "./hooks/usePageLogic";
const page = () => {
  const { pathname, router } = usePageLogic();

  if (pathname == "/") {
    router.push("/home");
  }

  return <div>To Home</div>;
};

export default page;
