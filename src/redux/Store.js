import { combineReducers, createStore } from 'redux'
import { endState } from './Reducers';

const combine = combineReducers({
    counter: endState
  })

export default createStore(combine)