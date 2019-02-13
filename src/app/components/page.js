import React from "react";

import Loader from "./loader";

const Page = ({ children, loading }) => {
  return (
    <div className="flex column align-center pd-t-md desktop-pd-x-md">
      {loading ? <Loader /> : children}
    </div>
  );
};

export default Page;
