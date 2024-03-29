import { useRouter } from "next/router";
import React from "react";

function courses() {
  const router = useRouter();
  console.log(router.query.single?.at(-1));
  return <div>courses</div>;
}

export default courses;
