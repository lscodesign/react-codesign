
import { SizePropsType, SizeType, VariantType } from "./button-types";
import { ColorType, CompoundColor } from "../../styles/colors";
import fontSizes from "../../styles/fontSizes";
import sizes from "../../styles/sizes";

export function getColors(colors: ColorType, scheme: CompoundColor) {
  const _scheme = colors[scheme];

  return {
    background: typeof _scheme === 'object' ? _scheme?.background : _scheme,
    text: typeof _scheme === 'object' ? _scheme.text : colors.text_primary_contrast
  }
}

export function getApperance(colors: ColorType, scheme: CompoundColor, variant: VariantType) {
  const { background, text } = getColors(colors, scheme);

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
    fontSize: fontSizes.caption,
    height: sizes.height_xs,
    minWidth: '4rem',
    padding: sizes.xs
  },
  sm: {
    fontSize: fontSizes.body,
    height: sizes.height_sm,
    minWidth: '4rem',
    padding: sizes.sm,
  },
  md: {
    fontSize: fontSizes.body,
    height: sizes.height_md,
    minWidth: '4rem',
    padding: sizes.md,
  }
}

export function getSize(size: SizeType) {
  return `
    font-size: ${sizeMap[size].fontSize};
    height: ${sizeMap[size].height};
    padding-inline: ${sizeMap[size].padding};
  `
}