import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage is localStorage
import { rootReducer } from './rootReducer';

// Redux persist configuration
const persistConfig = {
  key: 'root',  // key for localStorage
  storage,      // defines storage type (localStorage)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Persistor to be used in the app
export const persistor = persistStore(store);
