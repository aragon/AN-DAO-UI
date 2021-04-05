import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main } from '@aragon/ui';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from './AragonTheme';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </Main>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
