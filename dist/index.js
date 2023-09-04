"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/@ibti/index.ts
var ibti_exports = {};
__export(ibti_exports, {
    Button: function() {
        return Button;
    },
    blurRadius: function() {
        return blurRadius;
    },
    boxShadow: function() {
        return boxShadow;
    },
    breakpoints: function() {
        return breakpoints;
    },
    buttonVariants: function() {
        return buttonVariants;
    },
    cn: function() {
        return cn;
    },
    colors: function() {
        return colors;
    },
    fontSizes: function() {
        return fontSizes;
    },
    fontWeights: function() {
        return fontWeights;
    },
    fonts: function() {
        return fonts;
    },
    layout: function() {
        return layout;
    },
    lineHeights: function() {
        return lineHeights;
    },
    percentages: function() {
        return percentages;
    },
    radius: function() {
        return radius;
    },
    space: function() {
        return space;
    },
    transition: function() {
        return transition;
    },
    zIndex: function() {
        return zIndex;
    }
});
module.exports = __toCommonJS(ibti_exports);
// src/@ibti/components/ui/Button/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
// src/@ibti/libs/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/@ibti/components/ui/Button/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", {
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
});
var Button = React.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    blurRadius: blurRadius,
    boxShadow: boxShadow,
    breakpoints: breakpoints,
    buttonVariants: buttonVariants,
    cn: cn,
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    layout: layout,
    lineHeights: lineHeights,
    percentages: percentages,
    radius: radius,
    space: space,
    transition: transition,
    zIndex: zIndex
});
