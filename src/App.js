import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    // fontFamily:
  },
  palette: {
    secondary: { main: "#579FF2" },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Landing />
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
