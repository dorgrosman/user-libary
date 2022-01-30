import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ContactReducer from './Reducers/ContactReducer';

const rootReducer = combineReducers({
  usersReducer: ContactReducer,
  })
  const store = createStore(rootReducer ,applyMiddleware(thunk))

  export default store;