
import { SizePropsType, SizeType, VariantType } from "./button-types";
import { CompoundColor } from "../../styles/colors";
import { getColorVar, getFontSizeVar } from "../../utils";
import sizes from "../../styles/sizes";

export function getApperance(scheme: CompoundColor, variant: VariantType) {
  const background = getColorVar(scheme);
  const text = `var(${getColorVar(scheme, true)}-text, ${getColorVar('text_primary_contrast')})`

  const border = `border: 1px solid ${background};`

  if (variant === 'solid') {
    return `
      background-color: ${background};
      ${border}
      color: ${text};
      &:hover {
        box-shadow: 2px 2px 8px color-mix(in srgb, ${background} 60%, transparent);
      }
    `;
  }
  if (variant === 'ghost') {
    return `
      background-color: transparent;
      border: transparent;
      color: ${background};
      &:hover {
        background-color: color-mix(in srgb, ${background} 25%, transparent);
      }
    `;
  }
  if (variant === 'highlight') {
    return `
      background-color: transparent;
      ${border}
      color: ${background};
      &:hover {
        background-color: ${background};
        color: ${text};
      }
    `;
  }
  return `
    ${border}
    background-color: transparent;
    color: ${background};
  `;
}

export const sizeMap: Record<SizeType, SizePropsType> = {
  xs: {
    fontSize: 'caption',
    height: sizes.height_xs,
    minWidth: '4rem',
    padding: sizes.xs
  },
  sm: {
    fontSize: 'body',
    height: sizes.height_sm,
    minWidth: '4rem',
    padding: sizes.sm,
  },
  md: {
    fontSize: 'body',
    height: sizes.height_md,
    minWidth: '4rem',
    padding: sizes.md,
  }
}

export function getSize(size: SizeType) {
  return `
    font-size: ${getFontSizeVar(sizeMap[size].fontSize)};
    height: ${sizeMap[size].height};
    padding-inline: ${sizeMap[size].padding};
  `
}