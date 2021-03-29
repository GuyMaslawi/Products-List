import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContainer } from './AppContainer';
import { BrowserRouter } from 'react-router-dom';
import store from './store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
