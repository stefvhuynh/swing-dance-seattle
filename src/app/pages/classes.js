import React, { Fragment, useContext, useEffect } from "react";

import { ClassesContext } from "../providers/classes";

const Classes = () => {
  const { fetched, fetching, getClasses } = useContext(ClassesContext);

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <Fragment>
      <h3>classes</h3>
      {fetching && <div>loading...</div>}
      {fetched && <div>loaded!</div>}
    </Fragment>
  );
};

export default Classes;
