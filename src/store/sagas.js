import { all, setContext } from 'redux-saga/effects';

import { sagas as duckSagas } from './duck';

export default function* (context) {
  yield setContext(context);
  yield all([duckSagas()]);
}
