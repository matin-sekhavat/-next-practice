import { useRouter } from "next/router";
import React from "react";

function index() {
  const route = useRouter();
  function goBackHandler() {
    route.replace("/");
  }
  return (
    <>
      <div>react-js path</div>
      <button onClick={goBackHandler}>go home page</button>
    </>
  );
}

export default index;

//
