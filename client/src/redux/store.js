import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
// import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
     reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({ serializableCheck: false }),
      });
export const persistor = persistStore(store);

//the above persist store created along with the store is to allow the rexdux extention in chrome to save the data even when reload