import React,{ Component } from 'react'
import {Switch,Redirect,Route,withRouter,HashRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { switchBoard, deleteBoard,updateBoard,fetchAllBoards,addNewBoard,addNewPost,fetchAllPosts,deletePost,updatePost} from '../redux/ActionCreator'
import Header from './Header'
import SelectBoard from './SelectBoard'


const mapStateToProps = state =>{
    return {
        posts : state.posts  ,
        boards : state.boards
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addBoard    : () =>dispatch(addNewBoard()), 
        fetchBoards : () =>dispatch(fetchAllBoards()),
        deleteBoard : (board_id,openedBoard) =>dispatch(deleteBoard(board_id,openedBoard)), 
        updateBoard : (board,value) =>dispatch(updateBoard(board,value)), 
        switchBoard : (board_id) =>dispatch(switchBoard(board_id)), 
        
        addPost     : (board_id) =>dispatch(addNewPost(board_id)), 
        fetchPosts  : () =>dispatch(fetchAllPosts()),
        deletePost  : (post_id) =>dispatch(deletePost(post_id)),
        updatePost  : (post,value) =>dispatch(updatePost(post,value)),
    })
}
class Main extends Component{

    componentDidMount(){    
        this.props.fetchBoards()
        this.props.fetchPosts()
    }

    render(){
        const HomePage = () => {
            return(
                <SelectBoard
                    posts = {this.props.posts}
                    boards = {this.props.boards}
                    deletePost = {this.props.deletePost}
                    updatePost = {this.props.updatePost}
                    fetchBoards = {this.props.fetchBoards}
                    fetchPosts = {this.props.fetchPosts}
                    addPost = {this.props.addPost}
                    addBoard = {this.props.addBoard}
                    deleteBoard = {this.props.deleteBoard}
                    updateBoard = {this.props.updateBoard}
                    switchBoard = {this.props.switchBoard}
                />
            )
        }

        return(
            <HashRouter basename="/myBoard">
            <div>
                <Header />
                <Switch>
                    <Route path = '/myBoard' component = {HomePage}/>
                </Switch>
            </div>
            </HashRouter>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

