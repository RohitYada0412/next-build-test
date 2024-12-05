// ----------------------------------------------------------------------

export default function Table(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "td,th": {
            borderColor: theme.palette.divider,
          },
        },
      },
    },
  };
}
