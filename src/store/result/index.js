import { handleActions } from 'redux-actions'

import { resultLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {}

const reducer = handleActions(
  {
    [resultLoaded]: (state, action) => ({
      ...state,
      result: action.payload,
    }),
    [userLogout]: state => ({
      ...state,
      result: {},
    }),
  },
  initialState,
)

export const getResult = state => state.result.result

export default reducer
