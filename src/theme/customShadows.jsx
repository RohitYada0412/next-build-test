// @mui
import { alpha } from "@mui/material/styles";
//
import palette from "./palette";

// ----------------------------------------------------------------------

const color = palette.grey[1200];

export default function customShadows() {
  const transparent = alpha(color, 0.16);
  return {
    z1: `${transparent} 0px 7px 29px 0px`,
    z4: `${transparent} 0px 7px 29px 0px`,
    z8: `${transparent} 0px 7px 29px 0px`,
    z12: `${transparent} 0px 7px 29px 0px`,
    z16: `${transparent} 0px 7px 29px 0px`,
    z20: `${transparent} 0px 7px 29px 0px`,
    z24: `${transparent} 0px 7px 29px 0px`,
    z28: `0px 0px 10px 0px #00000024`,
    //
    primary: `0px 0px 21.5px 0px ${alpha(palette.primary.main, 0.6)}`,
    info: `0px 0px 5px 2px ${alpha(palette.info.main, 0.6)}`,
    secondary: `0px 0px 5px 2px ${alpha(palette.secondary.main, 0.6)}`,
    success: `0px 0px 5px 2px ${alpha(palette.success.main, 0.6)}`,
    warning: `0px 0px 5px 2px ${alpha(palette.warning.main, 0.6)}`,
    error: `0px 0px 5px 2px ${alpha(palette.error.main, 0.6)}`,
    //
    card: `0px 0px 20px 0px #0000001A`,
    dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  };
}
