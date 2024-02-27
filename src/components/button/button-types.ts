import { CompoundColor } from "../../styles/colors";

export type SizeType =
  | 'xs'
  | 'sm'
  | 'md';

export type SizePropsType = {
  fontSize: string;
  height: string;
  padding: string;
  minWidth: string;
}

export type VariantType =
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'highlight';

export interface CustomProps {
  /**
   * show spinner inside button
   */
  loading?: boolean;
  /**
   * display text next to the spinner if the boolean keeps the button's content.
   */
  loadingText?: boolean | string;
  scheme?: CompoundColor;
  size?: SizeType;
  variant?: VariantType;
  _styles?: string;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Omit<CustomProps, '_styles'>;