import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const darkTheme = createTheme({
  status: {
    danger: blue[100],
  },
  background: { paper: "#fff", default: "#EBECF3", secondary: "#F6F8FB" },
  palette: {
    mode: "dark",
  },
});

export default darkTheme;
