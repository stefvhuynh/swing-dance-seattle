import React from "react";

import Loader from "./loader";

const Page = ({ children, loading }) => {
  return (
    <div className="flex column align-center relative pd-t-md desktop-pd-x-md">
      {loading ? (
        <div className="absolute screen-height full-width top bg-off-white">
          <Loader />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Page;
