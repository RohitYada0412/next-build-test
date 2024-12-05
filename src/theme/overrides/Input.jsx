import { alpha } from "@mui/material/styles";
import { pxToRem, responsiveFontSizes } from "../typography";

// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          // backgroundColor: theme.palette.background.default,

        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: 1,
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            fontWeight: 300,
            fontSize: pxToRem(14),
            ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
            color: theme.palette.text.secondary,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            // borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.24)", // Hover border color
            },
          },
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: theme.palette.background.default,
          border: `1px solid ${theme.palette.action.disabledBackground}`, // Always black border
    
          // Ensure consistent border color in all states
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.action.disabledBackground, // Same color for all states
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.action.disabledBackground, // Prevent hover effect
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.action.disabledBackground, // Prevent focus effect
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.action.disabledBackground, // Prevent disabled effect
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.action.disabledBackground, // Prevent error color
          },
        },
    
        input: {
          fontSize: 16,
          "&.MuiInputBase-inputSizeSmall": {
            fontSize: 14,
            "&::placeholder": {
              fontSize: 14,
            },
          },
          "&::placeholder": {
            opacity: 1,
            fontWeight: 300,
            fontSize: 16,
            color: theme.palette.text.secondary,
          },
        },
      },
    },
    
    
  };
}
