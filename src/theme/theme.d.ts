import "@mui/material/styles";
import { BackgroundColors } from "./palette";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      dropdown: string;
      card: string; // Add any other custom shadow definitions here if needed
    };
  }

  interface ThemeOptions {
    customShadows?: {
      dropdown?: string;
      card?: string; // Ensure to mirror the custom shadows in Theme
    };
  }

  interface TypographyVariants {
    fontWeightSemiBold: number;
  }

  interface TypographyVariantsOptions {
    fontWeightSemiBold?: number;
  }
}

// Update the Typography interface to include your custom typography
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
  }
}

declare module "@mui/material/styles" {
  interface TypeBackground {
    neutral: string;
  }
}
