import { handleActions } from 'redux-actions'

import { questionsLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  numberOfQuestions: 0,
  questions: {},
}

const reducer = handleActions(
  {
    [questionsLoaded]: (state, action) => ({
      ...state,
      questions: {
        ...state.questions,
        [action.payload.questions[action.payload.questions.length - 1].id]:
          action.payload.questions,
      },
      numberOfQuestions: action.payload.total,
    }),
    [userLogout]: state => ({
      ...state,
      questions: [],
    }),
  },
  initialState,
)

export const getNumberOfQuestions = state => state.question.numberOfQuestions

export const getQuestions = state =>
  Object.values(state.question.questions).reduce(
    (acc, p) => [...acc, ...p],
    [],
  ) || []

export default reducer
