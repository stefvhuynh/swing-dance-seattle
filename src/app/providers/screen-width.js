import React, { createContext, useState } from "react";

const defaultScreenWidth = 0;

export const ScreenWidthContext = createContext({
  screenWidth: defaultScreenWidth,
  setScreenWidth: () => {}
});

const ScreenWidthProvider = ({ children }) => {
  const [screenWidth, baseSetScreenWidth] = useState(defaultScreenWidth);

  const setScreenWidth = (width) => {
    if (width !== screenWidth) {
      baseSetScreenWidth(width);
    }
  };

  return (
    <ScreenWidthContext.Provider value={{ screenWidth, setScreenWidth }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export default ScreenWidthProvider;
