import React,{Component} from 'react'

import {baseUrl} from '../shared/baseUrl'


class Board extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const posts = this.props.posts.posts.map((post) => {
            return(
            <ul key = {post.id}>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.date}</li>
                <li>{post.body}</li>
               <div id="outer"> <button className="button_slide slide_right"> fjfjfjfjfjfjffjsdsd</button></div>
            </ul>
            
            )
        })
        return(
            <div>
            {posts}
            </div>
        )
    }
}

export default Board