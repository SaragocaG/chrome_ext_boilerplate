import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

const appSlug = chrome.runtime.getManifest().name.replaceAll(' ', '_').toLowerCase();

const persistConfig = {
  key: `__${appSlug}__`,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  composeWithDevTools(),
);
const persistor = persistStore(store);

export { store, persistor };
