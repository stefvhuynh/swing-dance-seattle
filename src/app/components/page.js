import React from "react";

import Loader from "./loader";

const Page = ({ children, loading }) => {
  return (
    <div className="flex column align-center">
      {loading ? <Loader /> : children}
    </div>
  );
};

export default Page;
