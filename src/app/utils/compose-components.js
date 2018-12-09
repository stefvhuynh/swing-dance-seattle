import React from "react";

const composeComponents = (...components) => {
  const Component = components[0];

  if (components.length === 1) {
    return <Component />;
  }

  return (
    <Component>
      {composeComponents(...components.slice(1))}
    </Component>
  );
};

export default composeComponents;
