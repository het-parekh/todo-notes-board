import React,{ Component } from 'react'
import {Switch,Redirect,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { addNewPost,fetchAllPosts} from '../redux/ActionCreator'

import Board from './Board'
import Header from './Header'

const mapStateToProps = state =>{
    return {
        posts : state.posts  
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addPost : (params) =>dispatch(addNewPost(params)), 
        fetchPosts : () => dispatch(fetchAllPosts())
    })
}
class Main extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){    
        this.props.fetchPosts()
    }

    render(){
        const HomePage = () => {
            return(
                <Board
                    posts = {this.props.posts}
                    addPost = {this.props.addPost}
                />
            )
        }

        return(
            <div>
                <Header />
                <Switch location = {this.props.location}>
                    <Route path = '/home' component = {HomePage}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

