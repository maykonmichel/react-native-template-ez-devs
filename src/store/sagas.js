import { all } from 'redux-saga/effects';

import { sagas as duckSagas } from './duck';

export default function* () {
  yield all([
    duckSagas(),
  ]);
}
