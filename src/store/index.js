import { AsyncStorage } from 'react-native';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './sagas';
import api from '../services/api';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const context = { api };

export const store = createStore(
  persistReducer(config, reducers),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(sagas, context);

export const persistor = persistStore(store);
