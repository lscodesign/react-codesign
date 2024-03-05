export default {
  border_radius: '6px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xlg: '20px',
  xxlg: '32px',
  //height
  height_xs: '24px',
  height_sm: '32px',
  height_md: '40px',
  height_lg: '48px',
}

type SizeType =
  | 'border_radius'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xlg'
  | 'xxlg'
  | 'height_xs'
  | 'height_sm'
  | 'height_md'
  | 'height_lg'

export type Size = {
  [key in SizeType]?: number | string;
}