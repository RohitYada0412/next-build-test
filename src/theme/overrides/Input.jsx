import { alpha } from "@mui/material/styles";
import { pxToRem, responsiveFontSizes } from "../typography";

// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: 1,
          backgroundColor: "#4D4D4F1A", // Set default input background color
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            fontWeight: 400,
            fontSize: pxToRem(14),
            ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
            color:'#4D4D4F',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#4D4D4F", // Set background color for filled inputs
          "&:hover": {
            backgroundColor: alpha("#4D4D4F", 0.1),
          },
          "&.Mui-focused": {
            backgroundColor: alpha("#4D4D4F", 0.9),
          },
          "&.Mui-disabled": {
            backgroundColor: alpha("#4D4D4F", 0.5),
          },
        },
      },
    },
   
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#4D4D4F1A",
          // border: "1px solid #D9D9D9",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D9D9D9",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D9D9D9",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D9D9D9",
          },
        },
        // input: {
        //   padding: "10px 15px",
        //   fontSize: "16px",
        //   "&::placeholder": {
        //     color: "#A1A1A1",
        //   },
        // },
      },
    },
    


  };
}
