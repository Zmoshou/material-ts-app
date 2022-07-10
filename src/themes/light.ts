import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const lightTheme = createTheme({
  status: {
    danger: orange[500],
  },
  background: { paper: "#fff", default: "#EBECF3", secondary: "#F6F8FB" },
  palette: {
    mode: "light",
  },
});

export default lightTheme;
