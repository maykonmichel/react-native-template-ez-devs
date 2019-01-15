import { createAction, combineActions } from 'redux-actions';

export const createCommonActions = type => ({
  [type]: createAction(type),
  [`${type}_STARTED`]: (code = 100, message = `${type}_STARTED`) => ({
    status: {
      code,
      message
    }
  }),
  [`${type}_SUCCEEDED`]: (code = 200, message = `${type}_SUCCEEDED`) => ({
    status: {
      code,
      message
    }
  }),
  [`${type}_FAILED`]: (code = 400, message = `${type}_FAILED`) => ({ status: { code, message } }),
});

export const handleCommonActions = type => ({
  [combineActions(
    `${type}_STARTED`,
    `${type}_SUCCEEDED`,
    `${type}_FAILED`
  )]: (state, { payload: { status } }) => ({
    ...state,
    status,
  }),
});
