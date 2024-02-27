export type SimpleColor =
  | 'backdrop'
  | 'shadow'
  | 'background'
  | 'border'
  | 'surface'
  | 'text_primary'
  | 'text_primary_contrast'
  | 'text_secondary'
  | 'text_secondary_contrast';

export type SimpleColorScheme<T extends string> = {
  [key in T]?: string;
}

export type CompoundColor =
  | 'danger'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export type CompoundColorScheme<T extends string> = {
  [key in T]?: string | {
    background: string;
    text: string;
  };
}

export type ColorType = CompoundColorScheme<CompoundColor> & SimpleColorScheme<SimpleColor>;

export const colors: ColorType = {
  backdrop: '#00000060',
  shadow: '#00000010',
  background: '#F8F9FA',
  border: '#d8d8d8',
  danger: '#e53e3e',
  info: '#00b6ff',
  primary: '#4d60c2',
  secondary: '#094d9f',
  surface: '#FFFFFF',
  success: '#21c35e',
  text_primary: '#2D3748',
  text_primary_contrast: '#FFFFFF',
  text_secondary: '#A0AEC0',
  text_secondary_contrast: '#7c7c7c',
  warning: '#ff822d',
}