import {createStore, combineReducers} from 'redux'

import githubReducer from "reducers/githubReducer"

const rootReducer = combineReducers(
  { 
    githubReducer: githubReducer
  }
)

export default createStore(rootReducer)