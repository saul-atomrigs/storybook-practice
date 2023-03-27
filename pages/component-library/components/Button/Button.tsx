/**
 * A react button component:
 */

import React from "react";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};
