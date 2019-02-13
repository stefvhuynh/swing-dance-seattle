import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = ({ threshold = 250 }) => {
  const [showLoader, setShowLoader] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowLoader(true);
      timeoutRef.current = null;
    }, threshold);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return showLoader ? (
    <div className="flex justify-center align-center pd-y-md">
      <FontAwesomeIcon
        className="animation-compass font-green font-xl"
        icon="compass"
      />
    </div>
  ) : null;
};

export default Loader;
