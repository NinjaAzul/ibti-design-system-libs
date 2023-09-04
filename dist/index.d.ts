import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare function cn(...inputs: ClassValue[]): string;

declare const colors: {
    readonly primary: "#F5812D";
    readonly secondary: "#1D2A3D";
};

declare const fontSizes: {
    readonly xxs: "0.625rem";
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly "2xl": "1.5rem";
    readonly "4xl": "2rem";
    readonly "5xl": "2.25rem";
    readonly "6xl": "3rem";
    readonly "7xl": "4rem";
    readonly "8xl": "4.5rem";
    readonly "9xl": "6rem";
};

declare const fontWeights: {
    readonly extraLight: "200";
    readonly light: "300";
    readonly regular: "400";
    readonly medium: "500";
    readonly semiBold: "600";
    readonly bold: "700";
    readonly black: "900";
};

declare const fonts: {
    readonly default: "Roboto, sans-serif";
    readonly code: "monospace";
};

declare const lineHeights: {
    readonly shorter: "125%";
    readonly short: "140%";
    readonly base: "160%";
    readonly tall: "180%";
};

declare const radius: {
    readonly px: "1px";
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "16px";
    readonly full: "99999px";
    readonly circle: "50%";
};

declare const space: {
    readonly 0: "0rem";
    readonly 0.25: "0.0625rem";
    readonly 0.5: "0.125rem";
    readonly 0.75: "0.1875rem";
    readonly 1: "0.0625rem";
    readonly 2: "0.125rem";
    readonly 4: "0.25rem";
    readonly 8: "0.5rem";
    readonly 12: "0.75rem";
    readonly 16: "1rem";
    readonly 20: "1.25rem";
    readonly 24: "1.5rem";
    readonly 28: "1.75rem";
    readonly 32: "2rem";
    readonly 40: "2.5rem";
    readonly 48: "3rem";
    readonly 64: "4rem";
    readonly 80: "5rem";
    readonly 160: "10rem";
    readonly 256: "16rem";
    readonly 320: "20rem";
    readonly 384: "24rem";
    readonly 448: "28rem";
    readonly 512: "32rem";
    readonly 640: "40rem";
    readonly 768: "48rem";
    readonly 896: "56rem";
    readonly 1024: "64rem";
    readonly 1152: "72rem";
    readonly 1280: "80rem";
    readonly 1408: "88rem";
    readonly 1536: "96rem";
    readonly 1664: "104rem";
    readonly 1792: "112rem";
    readonly 1920: "120rem";
    readonly 2048: "128rem";
    readonly 2304: "144rem";
    readonly 2560: "160rem";
    readonly 2816: "176rem";
    readonly 3072: "192rem";
    readonly 3328: "208rem";
    readonly 3584: "224rem";
    readonly 3840: "240rem";
    readonly 4096: "256rem";
    readonly 4352: "272rem";
    readonly 4608: "288rem";
    readonly 4864: "304rem";
    readonly 5120: "320rem";
};

declare const percentages: {
    0: string;
    5: string;
    10: string;
    15: string;
    20: string;
    25: string;
    30: string;
    35: string;
    40: string;
    45: string;
    50: string;
    55: string;
    60: string;
    65: string;
    70: string;
    75: string;
    80: string;
    85: string;
    90: string;
    95: string;
    100: string;
};

declare const breakpoints: {
    readonly mobileS: 320;
    readonly mobileM: 375;
    readonly mobileL: 425;
    readonly tablet: 768;
    readonly laptop: 1024;
    readonly desktop: 1200;
    readonly desktopL: 1536;
    readonly Tv: 1920;
    readonly TvL: 2560;
    readonly TvXL: 3840;
    readonly TvXXL: 4096;
};

declare const zIndex: {
    readonly navbar: 100;
    readonly menuMobile: 110;
    readonly modals: 120;
};

declare const layout: {
    readonly containerMaxWidth: string;
    readonly gutter: "1.5rem";
};

declare const transition: {
    fast: string;
    default: string;
    slow: string;
};

declare const boxShadow: {
    readonly normal: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15)";
    readonly medium: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.15)";
    readonly large: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.15)";
};

declare const blurRadius: {
    readonly normal: ".25rem";
};

export { Button, ButtonProps, blurRadius, boxShadow, breakpoints, buttonVariants, cn, colors, fontSizes, fontWeights, fonts, layout, lineHeights, percentages, radius, space, transition, zIndex };
