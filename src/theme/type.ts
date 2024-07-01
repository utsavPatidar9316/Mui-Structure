import { Theme } from "@mui/material/styles";

export type BgBlurProps = {
  color?: string;
  blur?: number;
  opacity?: number;
  imgUrl?: string;
};

export type BgGradientProps = {
  direction?: string;
  startColor?: string;
  endColor?: string;
  imgUrl?: string;
  color?: string;
};

export type PaperProps = {
  theme: Theme;
  bgcolor?: string;
  dropdown?: boolean;
};

export type CustomShadows = {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  card: string;
  dropdown: string;
  dialog: string;
  primary: string;
  info: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
};

export type Overrides = {
  MuiCssBaseline?: {
    styleOverrides?: Record<string, any>;
  };
  MuiBackdrop?: {
    styleOverrides?: Record<string, any>;
  };
  MuiButton?: {
    styleOverrides?: Record<string, any>;
  };
  MuiCard?: {
    styleOverrides?: Record<string, any>;
  };
  MuiCardHeader?: {
    defaultProps?: Record<string, any>;
    styleOverrides?: Record<string, any>;
  };
  MuiOutlinedInput?: {
    styleOverrides?: Record<string, any>;
  };
  MuiPaper?: {
    defaultProps?: Record<string, any>;
  };
  MuiTableCell?: {
    styleOverrides?: Record<string, any>;
  };
  MuiTooltip?: {
    styleOverrides?: Record<string, any>;
  };
  MuiTypography?: {
    styleOverrides?: Record<string, any>;
  };
  MuiMenuItem?: {
    styleOverrides?: Record<string, any>;
  };
};

export type Color = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type Grey = {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type CommonColors = {
  black: string;
  white: string;
};

export type ActionColors = {
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
  active: string;
};

export interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface BackgroundColors {
  paper: string;
  default: string;
  neutral: string;
}

export interface Palette {
  primary: Color;
  secondary: Color;
  info: Color;
  success: Color;
  warning: Color;
  error: Color;
  grey: Grey;
  common: CommonColors;
  divider: string;
  action: ActionColors;
  text: TextColors;
  background: BackgroundColors;
  mode: "light" | "dark";
}

export type ResponsiveFontSizesProps = {
  sm: number;
  md: number;
  lg: number;
};
