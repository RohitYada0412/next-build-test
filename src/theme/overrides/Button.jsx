import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 600,
          textWrap: "nowrap",
          letterSpacing: 0.5,
          padding: theme.spacing(1, 2.1),
          borderRadius: 50,
          transition: ".2s all ease-in-out",
          backgroundColor:'#FFFFFF',
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              "&:hover": {
                backgroundColor: theme.palette.primary.hoverBG,
                color: theme.palette.common.white,
                transition: ".2s all ease-in-out",
              },
            }),
          ...(ownerState.varianttype === "ghost" && {
            border: "1.2px solid #8A8A8A66",
          }),
        }),
        sizeLarge: {
          fontSize: 18,
          height: 55,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
