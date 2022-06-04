import { createStore, combineReducers } from 'redux';
import {counterReducer} from './reducer/counter-reducer'

const reducers = combineReducers({
    counterReducerState: counterReducer
})

export const store = createStore(reducers)