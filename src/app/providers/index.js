import composeComponents from "../utils/compose-components";
import ScreenWidthProvider from "./screen-width";
import ClassesProvider from "./classes";

const Providers = ({ children }) => {
  return composeComponents(
    ScreenWidthProvider,
    ClassesProvider,
    () => children
  );
};

export default Providers;
