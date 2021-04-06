import React from 'react';
import ReactDOM from 'react-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { lightTheme } from './AragonTheme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      {/* for date picker https://material-ui-pickers.dev/getting-started/installation */}
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
