import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../shared/baseUrl'
/************************
Create New Board
*************************/ 
export const addBoard = (new_board) => ({
    type:ActionTypes.ADD_BOARD,
    payload:new_board
})

export const addNewBoard = () => (dispatch) =>{

    const newBoard = {
        title:"New Board"
    }
    
    return fetch(baseUrl+"boards",{
        method:"POST",
        
        body:JSON.stringify(newBoard),
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then(response => dispatch(addBoard(response)))
    .catch((error)=>{
        console.error('Error',error)
    })
}

/************************
Fetch Boards
*************************/ 
export const fetchBoards = (boards) => ({
    type:ActionTypes.FETCH_BOARDS,
    payload:boards
})

export const fetchAllBoards = () =>(dispatch) => {
    return fetch(baseUrl+"boards")
    .then(response => response.json())
    .then(boards => dispatch(fetchBoards(boards)))
    .catch(error => console.error('Error',error))
}
/***********************
 Delete Board
 ***********************/
export const deleteBoard_mini = (board_id,openedBoard) =>({
    type:ActionTypes.DELETE_BOARD,
    payload:[board_id,openedBoard]  
}) 

export const deleteBoard = (board_id,openedBoard) => (dispatch) => {
    console.log(openedBoard)
    if (board_id == openedBoard){
        openedBoard = 0
    }
    return fetch(baseUrl+'boards/'+board_id,{
        method:"DELETE",
        
    })
    .then(reposnse => reposnse.json())
    .then(() => dispatch(deleteBoard_mini(board_id,openedBoard)))
    .catch(error => console.error("Delete Error : ",error))
}

/***********************
 Update Board
 ***********************/
export const updateBoard_mini = (patched_board) => ({
    type:ActionTypes.UPDATE_BOARD,
    payload:patched_board
})
export const updateBoard = (board,value) =>(dispatch) =>{
    const body = board.split(" ")[0]
    return  fetch(baseUrl + 'boards/' + board.split(" ")[1],{
        method:"PATCH",
        
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
           [body]:value
        })
    })
    .then(response => response.json())
    .then(data => dispatch(updateBoard_mini(data)))
    .catch(error => console.error("Update Error : ",error))
}

/***********************
 SWITCH Board
 ***********************/
export const switchBoard = (board_id) => ({
    type:ActionTypes.SWITCH_BOARD,
    payload:board_id
})

/************************
Create New Post
*************************/ 
export const addPost = (new_post) => ({
    type:ActionTypes.ADD_POST,
    payload:new_post
})

export const addNewPost = (board_id) => (dispatch) =>{
    var date = new Date()
    var next_date = new Date()
    next_date.setDate(date.getDate()+1)
    const newPost = {
        title:'',
        body:'',
        start_date:date,
        due_date:next_date,
        board:board_id,
        status:false
    }
    
    return fetch(baseUrl+"posts",{
        method:"POST",
        
        body:JSON.stringify(newPost,),
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

/***********************
 Delete Post
 ***********************/
export const deletePost_mini = (post_id) =>({
    type:ActionTypes.DELETE_POST,
    payload:post_id  
}) 

export const deletePost = (post_id) => (dispatch) => {
    return fetch(baseUrl+'posts/'+post_id,{
        method:"DELETE",
        
    })
    .then(reposnse => reposnse.json())
    .then(() => dispatch(deletePost_mini(post_id)))
    .catch(error => console.error("Delete Error : ",error))
}

/***********************
 Update Post
 ***********************/
export const updatePost_mini = (patched_post) => ({
    type:ActionTypes.UPDATE_POST,
    payload:patched_post
})
export const updatePost = (post,value) =>(dispatch) =>{
    const body = post.split(" ")[0]
    return  fetch(baseUrl + 'posts/' + post.split(" ")[1],{
        method:"PATCH",
        
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
           [body]:value
        })
    })
    .then(response => response.json())
    .then((data) => {
        console.log(body)
        if(body!=="title" && body!=="body"){
            dispatch(updatePost_mini(data))
        }})
    .catch(error => console.error("Update Error : ",error))
}


