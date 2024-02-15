import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from '@mui/material';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto, Open Sans, sans-serif",
    ],
  },
  palette: {
    common: {
      white: '#FFFF',
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DndProvider>
  </React.StrictMode>
);
