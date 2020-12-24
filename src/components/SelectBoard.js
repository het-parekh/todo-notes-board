
import React,{ Component } from 'react';
import {Navbar,Button} from 'reactstrap'
import Board from './Board';
import {FaPlusCircle} from "react-icons/fa"
import {AiOutlineCloseCircle} from 'react-icons/ai'
//Animation LEFT
//Animation LEFT
//Animation LEFT
//Animation LEFT
//Animation LEFT
//Animation LEFT
//Animation LEFT
//Animation LEFT
//Animation LEFT
var clickCount = 0;
class SelectBoard extends Component{
    constructor(props){
        super(props)
        this.state = {
            readonly_var:true,
            board_title_class:{},
        }
    }
    switchBoard = (e) =>{

        var board_id=e.target.name
        clickCount++
        setTimeout(() => {
            if (clickCount === 1 && this.state.readonly_var===true){
                this.props.switchBoard(board_id)
            }
        }, 300);
    }
    deleteBoard = (board_id,openedBoard) =>{
        const posts = this.props.posts.posts
        posts.forEach(post => {
            if (post.board == board_id){
                this.props.deletePost(post.id)
            }
        });
        this.props.deleteBoard(board_id,openedBoard)
    }

    editable = (e) => {this.setState({readonly_var:false,board_title_class:{...this.state.board_title_class,[e.target.name]:""}})}
    not_editable = (e) => {
        this.setState({readonly_var:true,board_title_class:{...this.state.board_title_class,[e.target.name]:"uneditable_tab"}})
        this.updateTitle(e)
    }
    updateTitle = (e) => {this.props.updateBoard("title "+e.target.name,e.target.value)}

    render(){
        clickCount = 0
        
        const select_board = this.props.boards.boards.map((board)=>{
            return(
                < >
                    <button key={board.id+" newboard"} title={board.title} className={this.props.boards.openedBoard==board.id?'tabs tab-selected':'tabs'} name={board.id} onClick={this.switchBoard} >
                        <input key={board.id+" input"} name={board.id} className={this.state.board_title_class[board.id]===undefined?'uneditable_tab':this.state.board_title_class[board.id]} required readOnly={this.state.readonly_var} 
                        onDoubleClick={this.editable} onBlur={this.not_editable} defaultValue ={board.title}></input>
                    <AiOutlineCloseCircle key={board.id+" close"} onClick={() => this.deleteBoard(board.id,this.props.boards.openedBoard)} className="close_icon"/>
                    </button>
                    
                </>
            )
        })
        const allowed_posts = this.props.posts.posts.filter(post => post.board == this.props.boards.openedBoard)
        return(
        <>
       
            <Navbar className='py-0 px-0' style={{marginBottom:"20px",justifyContent:"flex-start",backgroundColor:"#fff"}} >
                <Button  onClick={this.props.addBoard} outline color = 'success' style={{paddingBottom:'9px',marginTop:"0.6px",fontFamily:"Ink Free",borderRadius:"0px",marginBottom:"30px"}}><FaPlusCircle /> Add Board</Button>
                {select_board}
            </Navbar>
            <div>
                <Board 
                            board = {this.props.boards.openedBoard}
                            posts = {allowed_posts}
                            deletePost = {this.props.deletePost}
                            updatePost = {this.props.updatePost}
                            fetchPosts = {this.props.fetchPosts}
                            addPost = {this.props.addPost}
                />
            </div>
        </>
        )
    }

}

export default SelectBoard