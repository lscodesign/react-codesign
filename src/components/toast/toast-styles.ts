import { CompoundColor } from "../../styles";
import { getColorVar } from "../../utils";

export function getApperance(type: CompoundColor) {
  const background = getColorVar(type);
  const text = `var(${getColorVar(type, true)}-text, ${getColorVar('text_primary_contrast')})`

  return `
    background-color: ${background};
    color: ${text};
  `;
}