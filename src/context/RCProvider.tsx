import React, { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";

export default (props: { children?: ReactNode }) => (
  <ThemeProvider>
    {props.children}
  </ThemeProvider>
)