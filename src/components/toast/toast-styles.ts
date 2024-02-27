import { ColorType } from "../../styles";
import { ToastProps } from "./toast-types";

export function getApperance(colors: ColorType, type: ToastProps['type']) {
  const scheme = colors[type!];

  const background = typeof scheme === 'object' ? scheme.background : scheme;
  const text = typeof scheme === 'object' ? scheme.text : colors.text_primary_contrast

  return `
    background-color: ${background};
    color: ${text};
  `;
}