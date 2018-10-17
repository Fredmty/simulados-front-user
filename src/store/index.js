import { combineReducers } from 'redux'
import uiReducer from './ui'
import examReducer from './exam'
import questReducer from './question'
import userReducer from './user'
<<<<<<< HEAD
import editionsReducer from './edition'
=======
import resultReducer from './result'
>>>>>>> fetch result from api

export default combineReducers({
  ui: uiReducer,
  exam: examReducer,
  question: questReducer,
  user: userReducer,
<<<<<<< HEAD
  editions: editionsReducer,
=======
  result: resultReducer,
>>>>>>> fetch result from api
})
