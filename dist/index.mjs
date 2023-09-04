// src/@ibti/components/ui/Button/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/@ibti/libs/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/@ibti/components/ui/Button/button.tsx
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/@ibti/tokens/colors.ts
var colors = {
  primary: "#F5812D",
  secondary: "#1D2A3D"
};

// src/@ibti/tokens/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};

// src/@ibti/tokens/font-weights.ts
var fontWeights = {
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  black: "900"
};

// src/@ibti/tokens/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/@ibti/tokens/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/@ibti/tokens/radius.ts
var radius = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px",
  circle: "50%"
};

// src/@ibti/tokens/space.ts
var space = {
  0: "0rem",
  0.25: "0.0625rem",
  0.5: "0.125rem",
  0.75: "0.1875rem",
  1: "0.0625rem",
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  28: "1.75rem",
  32: "2rem",
  40: "2.5rem",
  48: "3rem",
  64: "4rem",
  80: "5rem",
  160: "10rem",
  256: "16rem",
  320: "20rem",
  384: "24rem",
  448: "28rem",
  512: "32rem",
  640: "40rem",
  768: "48rem",
  896: "56rem",
  1024: "64rem",
  1152: "72rem",
  1280: "80rem",
  1408: "88rem",
  1536: "96rem",
  1664: "104rem",
  1792: "112rem",
  1920: "120rem",
  2048: "128rem",
  2304: "144rem",
  2560: "160rem",
  2816: "176rem",
  3072: "192rem",
  3328: "208rem",
  3584: "224rem",
  3840: "240rem",
  4096: "256rem",
  4352: "272rem",
  4608: "288rem",
  4864: "304rem",
  5120: "320rem"
};

// src/@ibti/tokens/percentages.ts
var percentages = {
  0: "0%",
  5: "5%",
  10: "10%",
  15: "15%",
  20: "20%",
  25: "25%",
  30: "30%",
  35: "35%",
  40: "40%",
  45: "45%",
  50: "50%",
  55: "55%",
  60: "60%",
  65: "65%",
  70: "70%",
  75: "75%",
  80: "80%",
  85: "85%",
  90: "90%",
  95: "95%",
  100: "100%"
};

// src/@ibti/tokens/screens.ts
var breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
  desktopL: 1536,
  Tv: 1920,
  TvL: 2560,
  TvXL: 3840,
  TvXXL: 4096
};

// src/@ibti/tokens/z-index.ts
var zIndex = {
  navbar: 100,
  menuMobile: 110,
  modals: 120
};

// src/@ibti/tokens/layout.ts
var layout = {
  containerMaxWidth: breakpoints.desktop + "px",
  gutter: "1.5rem"
};

// src/@ibti/tokens/transition.ts
var transition = {
  fast: ".15s",
  default: ".2s",
  slow: ".3s"
};

// src/@ibti/tokens/box-shadow.ts
var boxShadow = {
  normal: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15)",
  medium: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.15)",
  large: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.15)"
};

// src/@ibti/tokens/blur-radius.ts
var blurRadius = {
  normal: ".25rem"
};
export {
  Button,
  blurRadius,
  boxShadow,
  breakpoints,
  buttonVariants,
  cn,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  layout,
  lineHeights,
  percentages,
  radius,
  space,
  transition,
  zIndex
};
