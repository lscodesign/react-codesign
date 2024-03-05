export type FontSizeType =
  | 'footnote'
  | 'caption'
  | 'body'
  | 'subtitle2'
  | 'subtitle1'
  | 'h6'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

export type FontSize = {
  [key in FontSizeType]?: number | string;
}

export const fontSizes: Record<FontSizeType, string> = {
  /* 10px */
  footnote: '0.625rem',
  /* 14px */
  caption: '0.875rem',
  /* 16px */
  body: '1rem',
  /* 18px */
  subtitle2: '1.125rem',
  /* 24px */
  subtitle1: '1.5rem',
  /* 30px */
  h6: '1.875rem',
  /* 36px */
  h5: '2.25rem',
  /* 48px */
  h4: '3rem',
  /* 60px */
  h3: '3.75rem',
  /* 72px */
  h2: '4.5rem',
  /* 84px */
  h1: '5.25rem',
};