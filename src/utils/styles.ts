import { ColorType, FontSize, colors, fontSizes } from "../styles";

export function getBgColor(color: any): string {
  if (typeof color === 'object') {
    return color.background;
  }
  return color;
}

export function parseAttributes<T extends Record<string, any>, P extends Record<string, any>>(attributes: T, props: P) {
  let str = '';

  for (const [key, item] of Object.entries(attributes)) {
    if(item.ignore){
      continue;
    }
    str += `${attributeCSS(item.attribute, props[key as keyof typeof props], item.value, item.type)}`;
  }

  /* Object.keys(attributes).map((key) => {
    const item = attributes[key as keyof typeof attributes];
    str += `${attributeCSS(item.attribute, props[key as keyof typeof props], item.value, item.type)}`;
  }); */

  return str;
}

export function attributeCSS(
  attr: string | Array<string>,
  value?: string | number | boolean | Array<string>,
  defaultValue?: string,
  type?: string,
) {
  if ((typeof value === 'undefined') || (typeof value === 'boolean' && value === false)) {
    return "";
  }
  if (typeof attr === "object") {
    let str = "";
    attr.forEach((item) => {
      str += parseAttribute(item, value, defaultValue, type);
    });
    return str;
  }
  return parseAttribute(attr, value, defaultValue, type)
}

export function parseAttribute(attr: string, value: any, default_value?: string, type?: string) {
  return `${attr}: ${getAttributeValue(value, default_value, type)};`;
}

export function getAttributeValue(value: any, default_value?: any, type?: string) {
  if (typeof value === 'boolean') {
    return default_value;
  }
  if (typeof value === 'number') {
    return type ? `${value}${type}` : value;
  }
  return `${value}`;
}

function createStylesheet(rule: string) {
  const id = 'rc-styles';
  let style = document.getElementById('rc-styles') as HTMLStyleElement;

  if (!style) {
    style = document.createElement('style');
    style.id = id;
    document.head.appendChild(style);
  }

  style.sheet?.insertRule(rule, style.sheet.cssRules.length);
}

export function getColorVar(key: keyof ColorType, onlyName?: boolean) {
  const varName = `--rc-color-${key.replaceAll('_', '-')}`;

  if (onlyName) {
    return varName;
  }

  return `var(${varName})`;
}

export function setColors(colors: ColorType) {
  let stylesheet = '';

  for (const [_key, value] of Object.entries(colors)) {
    const key = _key.replaceAll('_', '-');

    if (typeof value === 'object') {
      stylesheet += `
        --rc-color-${key}: ${value.background};
        --rc-color-${key}-text: ${value.text};
      `;
      continue;
    }

    stylesheet += `--rc-color-${key}: ${value};`
  }

  return stylesheet;
}

export function getFontSizeVar(key: keyof FontSize, onlyName?: boolean) {
  const varName = `--rc-font-size-${key.replaceAll('_', '-')}`;

  if (onlyName) {
    return varName;
  }

  return `var(${varName})`;
}

export function setFontSize(fonts: FontSize) {
  let stylesheet = '';

  for (const [_key, value] of Object.entries(fonts)) {
    const key = _key.replaceAll('_', '-');
    stylesheet += `--rc-font-size-${key}: ${getAttributeValue(value, undefined, 'px')};`
  }

  return stylesheet;
}

export function configStyles(config: {
  colors?: ColorType;
  fontSizes?: FontSize;
}) {
  let stylesheet = '';

  if (config.colors) {
    stylesheet += setColors(config.colors);
  }

  if (config.fontSizes) {
    stylesheet += setFontSize(config.fontSizes);
  }

  createStylesheet(`
    :root {
      ${stylesheet}
    }
  `)
}

configStyles({
  colors: colors,
  fontSizes: fontSizes
});