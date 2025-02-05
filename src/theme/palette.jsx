import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
export const GREY = {
  0: 'rgb(255, 255, 255)',
  100: "rgba(255, 255, 255, 0.24)",
  200: "#EEEEEE",
  300: "#E6E6E6",
  400: "#DDDDDD",
  500: "#D5D5D5",
  600: "#CDCDCD",
  700: "#C4C4C4",
  800: "#fff",
  900: "#B4B4B4",
  1000: "#ABABAB",
  1100: "#A3A3A3",
  1200: "#8A8A8A",
  1300: "#A1A1A1",
  1400: "#EFEFEF",
  1500: "#D1D1D1",
  1600: "#D0D0D0",
  1700: "#E8E8E8",
  1800: "#F3F3F3",
};

export const SECONDARY = {
  lighter: "#FBFEFF",
  light: "#FAFDFF",
  main: "#F7FCFF",
  dark: "#7C9AB7",
  darker: "#2F4C7A",
  contrastText: "#2F2F2F",
  hoverBG: "#1D1D1D",
};

export const PRIMARY = {
  lighter: "#D7F3FD",
  light: "#B0E4FC",
  main: "#3A94E7",
  dark: "#3A94E7",
  darker: "#0B2A6E",
  contrastText: "#FFFFFF",
};

export const INFO = {
  lighter: "#DFF3FC",
  light: "#9DCFF1",
  main: "#5895D3",
  dark: "#2C5797",
  darker: "#102965",
  contrastText: "#ffffff",
};

export const SUCCESS = {
  lighter: "#DCFACD",
  light: "#7EE668",
  main: "#0FAD0F",
  dark: "#077C1B",
  darker: "#02531E",
  contrastText: "#ffffff",
};

export const WARNING = {
  lighter: "#FEEBD2",
  light: "#FEB379",
  main: "#FD6320",
  dark: "#B62C10",
  darker: "#790A06",
  contrastText: "#ffffff",
};

export const ERROR = {
  lighter: "#FDE1D6",
  light: "#F78F85",
  main: "#E73647",
  dark: "#A61B41",
  darker: "#6E0A38",
  contrastText: "#ffffff",
};

export const ERRORDART = {
  lighter: "#fee6e8",
  light: "#fc828e",
  main: "#E3051B",
  dark: "#570105",
  darker: "#3f0002",
  contrastText: "#ffffff",
};

const palette = {
  common: { black: "#000000", white: "#ffffff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  errordark: ERRORDART,
  grey: GREY,
  divider: alpha(GREY[1400], 0.8),
  text: {
    primary: "rgb(15, 15, 15)",
    secondary: "rgba(255, 255, 255, 0.5)",
    dark: "#60737D",
    disabled: "#E0E0E7",
    contrastText: "#ffffff",
  },
  background: {
    paper: "rgba(255, 255, 255, 0.14)",
    default: GREY['100'],
  },
  action: {
    active: GREY['100'],
    hover: alpha("#2F2F2F", 0.08),
    selected: alpha("#2F2F2F", 0.16),
    disabled: GREY[500],
    disabledBackground: GREY[200],
    focus: alpha("#FFFFFF", 0.24),
    hoverOpacity: 0.08,
  },
};

export default palette;
