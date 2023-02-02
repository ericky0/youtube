import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store'
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
=======
import App from './App';
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store= {store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
=======
    <App />
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
  </React.StrictMode>
);