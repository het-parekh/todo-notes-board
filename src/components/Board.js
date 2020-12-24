import React,{Component} from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardLink,CardText,Button,Input} from 'reactstrap'
import {  FaPlusSquare, FaTrashAlt } from 'react-icons/fa'
import DatePicker from 'react-date-picker'
import Switch from "react-switch";

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            date : {},
        }
    }
    changeDate = (post_id,value) =>{
        this.setState({
            date:{...this.state.date,[post_id]:value}
        })
        this.props.updatePost("due_date "+post_id,value)
    }
    changeStatus = (e,post_id) => {
        this.props.updatePost("status "+post_id,e)
        // this.props.fetchPosts()
    }
    UpdateInput = (e) =>this.props.updatePost(e.target.name,e.target.value)
    
    deletePost = (post_id) => {this.props.deletePost(post_id)}
    addPost = () =>{
        this.props.addPost(this.props.board)
    }
    render(){
        let no_posts = ""
        if (this.props.posts.length===0 && this.props.board !== 0){
            no_posts = <center><div onClick={this.addPost}><a className="addFirstButton addFirstButton-green"><i className="fa fa-plus"><FaPlusSquare style={{color:"#fff"}} size={24}/> </i>Add Your <strong>First Post</strong></a></div></center>
        }
        const posts = this.props.posts.map((post) => {
            var start_date = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'numeric',year: 'numeric'}).format(Date.parse(post.start_date))
            var due_date = new Date(Date.parse(post.due_date))
            var status = "PENDING"
            var bgcolor = "#ffff80"
            var col = "#222"
            if (post.status == true){
                status =  "COMPLETED"
                bgcolor = "lightgreen"
                col = "#fff"
            }
            else if(post.status == false && post.due_date < post.start_date){
                status =  "OVERDUE!!"
                bgcolor = "#ff8080"
                col = "#fff"
            }
            return(
            <div key={post.id} style={{marginBottom:"30px"}}   className='px-3 float-left' >
                    <Card  style={{width: "18rem",backgroundColor:bgcolor}} >
                        <div style={{textAlign:"center",color:col}}><b>STATUS : {status}</b><div className="float-right"><FaPlusSquare onMouseEnter={this.props.fetchPosts} onClick={this.addPost} className="square" size={26}/></div><hr style={{marginTop:"0px"}} /></div>
                        <CardBody className="pt-0">
                            <CardTitle ><Input onChange = {this.UpdateInput}  name={'title '+ post.id} defaultValue={post.title}></Input></CardTitle>
                            <CardSubtitle><small className="text-muted"><span className="float-left">Start: {start_date}</span>
                                <span className='float-right mb-2'>
                                    <DatePicker minDate={due_date} value={this.state.date[post.id]!==undefined?this.state.date[post.id]:due_date} 
                                    onChange={(value) => this.changeDate(post.id,value)} clearIcon={null} 
                                    dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' format='dd/MM/y'></DatePicker>
                                </span>
                            </small>
                            
                            </CardSubtitle>
                            <CardText><Input onChange = {this.UpdateInput}   type="textarea" style={{overflow: 'scroll'}} name={'body '+ post.id}  defaultValue={post.body}></Input></CardText>
                            <CardLink to=''>
                            <label>
                                <Switch  className="react-switch" id={"status "+post.id} onChange={(e) => this.changeStatus(e,post.id)} checked={post.status} offColor="#dc3545"/>
                            </label>
                            </CardLink>
                            <CardLink className='float-right ' to=''><Button onMouseEnter={this.props.fetchPosts} onClick={() => this.deletePost(post.id)} color='danger'><FaTrashAlt /> Delete</Button></CardLink> 
                        </CardBody>
                        </Card>
            </div>
            )
        })
        return(
            
            <div>
            {no_posts}
            {posts}
            </div>
        )
    }
}

export default Board