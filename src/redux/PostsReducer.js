import * as ActionTypes from './ActionTypes'

export const Posts = (state = {posts:[]} , action) => {
    switch(action.type){
        case ActionTypes.ADD_POST:
            return {...state,posts:state.posts.concat(action.payload)}
        case ActionTypes.FETCH_POSTS:
            return {...state ,posts:action.payload}
        case ActionTypes.DELETE_POST:
            return{...state , posts:state.posts.filter(post => post.id !== action.payload )}
        case ActionTypes.UPDATE_POST:
            return {...state, posts:state.posts.map((post,post_id)=>{
                if(post.id === action.payload.id){
                    return action.payload
                }
                return post
            }) }
        default:
            return state
    }
}