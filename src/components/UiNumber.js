import React from "react";
import numeral from "numeral";

export const UiNumber = ({ children, format }) => {
  return <span>{numeral(children).format(format)}</span>;
};
