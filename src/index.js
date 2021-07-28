import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Provides redux store to whole Application
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

//persistor gets the store
//by clicking on a link we go to new component 
//uske baad hi toh hum check krenge if we have persisted that component
//isliye browserRouter wraps persistgate