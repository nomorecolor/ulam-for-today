import React from "react";

import "./Loader.css";

interface LoaderProp {
  hidden?: boolean;
}

export const Loader: React.FC<LoaderProp> = ({ hidden }) => {
  const div = hidden ? <></> : <div className="loader"></div>;
  return div;
};
