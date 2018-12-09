import React, { createContext, useState } from "react";

import { fetchClasses } from "../api";
import { serializeClasses } from "../serializers";

const defaultClassesState = {
  classes: [],
  fetched: false,
  fetching: false
};

export const ClassesContext = createContext({
  ...defaultClassesState,
  getClasses: () => {}
});

const ClassesProvider = ({ children }) => {
  const [classesState, setClassesState] = useState(defaultClassesState);

  const getClasses = () => {
    const { fetched, fetching } = classesState;

    if (fetched || fetching) {
      return;
    }

    setClassesState({ ...classesState, fetching: true });

    return fetchClasses().then((classes) => setClassesState({
      ...classesState,
      fetching: false,
      fetched: true,
      classes: serializeClasses(classes)
    }));
  };

  return (
    <ClassesContext.Provider value={{ ...classesState, getClasses }}>
      {children}
    </ClassesContext.Provider>
  );
};

export default ClassesProvider;
