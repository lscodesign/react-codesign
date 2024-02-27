import React, { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { ToastProvider } from "./ToastContext";

export default (props: { children?: ReactNode }) => (
  <ThemeProvider>
    <ToastProvider>
      {props.children}
    </ToastProvider>
  </ThemeProvider>
)