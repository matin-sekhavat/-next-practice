import Link from "next/link";
import React from "react";
import styles from "../styles/x.module.css";
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
      <p id={styles.p}>test</p>
    </>
  );
}

export default index;
