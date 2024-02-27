import type { IconComponent } from "../icon-types";
import * as arrow from "./arrow";
import * as chevron from "./chevron";

function parseName(str: string) {
  let name = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === ch.toUpperCase()) {
      name += `${i > 0 ? '-' : ''}${ch.toLowerCase()}`
      continue;
    }
    name += ch;
  }
  return name;
}

function transformObj(items: {}) {
  const obj: any = {};

  Object.keys(items).map((key) => {
    obj[parseName(key)] = items[key as keyof typeof items];
  });

  return obj;
}

const icons: Record<string, IconComponent> = {
  ...transformObj(arrow),
  ...transformObj(chevron),
}

export default icons;