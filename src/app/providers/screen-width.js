import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

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

ScreenWidthProvider.propTypes = {
  children: PropTypes.node
};

export default ScreenWidthProvider;
