import React, { lazy, Suspense } from "react";
import AntD from "./antd";
import Fusion from "./fusion";

const Index = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <AntD />
      <Fusion />
    </Suspense>
  );
};

export default Index;
