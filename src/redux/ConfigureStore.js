import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import {Posts} from './PostsReducer'
import {Boards} from './BoardReducer'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './FormReducer';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            posts:Posts,
            boards:Boards,
            ...createForms({
                register: InitialFeedback
            }),
        }),
        applyMiddleware(thunk)
    )
    return store
}
