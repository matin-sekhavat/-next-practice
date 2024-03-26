import Link from "next/link";
import React from "react";

function index() {
  return (
    <>
      <Link href={`/courses/react-js`}>to courses</Link>
      {/* <Link
        href={{
          pathname: "/courses/[name]",
          query: { name: "react" },
        }}
      >
        to courses
      </Link> */}
    </>
  );
}

export default index;
