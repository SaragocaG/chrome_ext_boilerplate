
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/storeConfig';

const Redux = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

const App = () => (
  <Redux>
    <>
      { /* do sothing awesome here */ }
    </>
  </Redux>
)

export default App;
