import * as ActionTypes from './ActionTypes'

export const Posts = (state = {posts:[]} , action) => {
    switch(action.type){
        case ActionTypes.ADD_POST:
            return {...state,posts:state.posts.concat(action.payload)}
        case ActionTypes.FETCH_POSTS:
            return {...state ,posts:action.payload}
        default:
            return state
    }
}