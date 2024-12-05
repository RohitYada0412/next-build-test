import { alpha } from "@mui/material/styles";

export const StyledLocationTextField = {
  backgroundColor: (theme) => theme.palette.text.contrastText,
  color: (theme) => theme.palette.primary.contrastText,
  boxShadow: (theme) =>
    `0px 0px 5.3px 0px ${alpha(theme.palette.common.black, 0.3)}`,
  paddingLeft: "6px",
  paddingRight: "6px",
  "&.Mui-focused fieldset": {
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};
