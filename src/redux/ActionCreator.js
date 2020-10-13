import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../shared/baseUrl'

/************************
Create New Post
*************************/ 
export const addPost = (new_post) => ({
    type:ActionTypes.ADD_POST,
    payload:new_post
})
export const addNewPost = (id , title, body, due_date, category, pos_x, pos_y) => (dispatch) =>{
    const newPost = {
        id:id,
        title:title,
        body:body,
        due_date:due_date,
        category:category,
        pos_x:pos_x,
        pos_y:pos_y
    }
    return fetch(baseUrl+"posts",{
        method:"POST",
        body:JSON.stringify(newPost),
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then(response => dispatch(addPost(response)))
    .catch((error)=>{
        console.error('Error',error)
    })
}

/************************
Fetch Posts
*************************/ 
export const fetchPosts = (posts) => ({
    type:ActionTypes.FETCH_POSTS,
    payload:posts
})

export const fetchAllPosts = () =>(dispatch) => {
    return fetch(baseUrl+"posts")
    .then(response => response.json())
    .then(posts => dispatch(fetchPosts(posts)))
    .catch(error => console.error('Error',error))
}

