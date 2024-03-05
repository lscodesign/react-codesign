type ObjectType<T> = {
  attribute: string;
  prop?: string;
  ignore?: boolean;
  type?: string;
  value?: T[keyof T];
}

export type PropsObject<T> = Record<keyof T, ObjectType<T>>;