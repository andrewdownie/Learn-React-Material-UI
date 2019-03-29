import React from "react";
import {render} from "react-dom";
import App from './Components/App';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>,
  document.getElementById('root')
)


/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
