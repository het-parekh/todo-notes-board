import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Posts} from './PostsReducer'
import {Boards} from './BoardReducer'

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            posts:Posts,
            boards:Boards,
        }),
        applyMiddleware(thunk,logger)
    )
    return store
}
