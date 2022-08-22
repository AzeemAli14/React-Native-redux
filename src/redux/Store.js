import { applyMiddleware, combineReducers, createStore } from 'redux'
import { endState } from './Reducers'
import thunk from 'redux-thunk';

const combine = combineReducers({
    counter: endState
  })

export default createStore(combine)