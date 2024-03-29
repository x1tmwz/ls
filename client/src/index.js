import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig';

const store = storeConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
