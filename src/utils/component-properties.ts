export type VARIANT_TYPES =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'info'
  | 'dark'
  | 'light';


  export interface BoxProps {
    icon?: string;
    text: string;
    title: string;
  }
  