import React from "react";
import routes from "../router/routes";
import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "../themes/ThemeProvider";

function App() {
  const app = useRoutes(routes);
  return (
    <ThemeProvider>
      <CssBaseline />
      {app}
    </ThemeProvider>
  );
}

export default App;
