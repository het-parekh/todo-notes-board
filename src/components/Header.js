import React,{Component} from 'react'
import {Container,Navbar,Nav, NavbarToggler, Collapse, NavItem, Modal, } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { FaHome,FaClipboard,FaRegEdit,FaCloud,FaBars, FaSignInAlt, FaRegistered,
        FaWindowClose,FaRegArrowAltCircleLeft}  from  'react-icons/fa'
class Header extends Component{
    constructor(props){
        super(props)
        this.collapseNavbar = this.collapseNavbar.bind(this)
        this.isLoginOpen = this.isLoginOpen.bind(this)
        this.isRegisterOpen = this.isRegisterOpen.bind(this)
        this.switchmodals = this.switchmodals.bind(this)
        this.state = {
            isNavCollapsed:false,
            isLoginOpen:false,
            isRegisterOpen:false
        }
    }

    collapseNavbar(){
        this.setState({
            isNavCollapsed:!this.state.isNavCollapsed
        })
    }

    isLoginOpen(){
        this.setState({
            isLoginOpen:!this.state.isLoginOpen
        })
    }
    isRegisterOpen(){
        this.setState({
            isRegisterOpen:!this.state.isRegisterOpen
        })
    }
    
    switchmodals(){
        if (this.state.isLoginOpen == true){
            this.isLoginOpen()
            this.isRegisterOpen()  
        }
        else{
            this.isRegisterOpen()  
            this.isLoginOpen()
        }
    }   
    render()
    {
        return(
        <div >
        {/* Login Modal Form */}
        <Modal  isOpen={this.state.isLoginOpen} toggle={this.isLoginOpen}>
           <div id="#modal_head">
           <button onClick={this.switchmodals} className="button_slide slide_left mt-3 ml-3 px-2 py-2"><FaRegArrowAltCircleLeft size={28}/> Register </button>                
           <div style={{cursor:"pointer"}} onClick={this.isLoginOpen} className="float-right mt-3 mr-3 py-0"><FaWindowClose size ={28} /></div>
            </div>
            <div className="form">
            <div className="form-panel one">
                <div className="form-header">
                <h1>Account Login</h1>
                </div>
                <div className="form-content">
                <form>
                    <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required="required"/>
                    </div>
                    <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required="required"/>
                    </div>
                    <div className="form-group">
                    <label className="form-remember">
                        <input type="checkbox"/>Remember Me
                    </label><a className="form-recovery" href="#">Forgot Password?</a>
                    </div>
                    <div className="form-group">
                    <button type="submit">Log In</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </Modal>
        {/* Register Modal Form */}
        <Modal isOpen={this.state.isRegisterOpen}>
        <div id="#modal_head">
           <button onClick={this.switchmodals} className="button_slide slide_left mt-3 ml-3 px-2 py-2"><FaRegArrowAltCircleLeft size={28}/> Login </button>                
           <div style={{cursor:"pointer"}} onClick={this.isRegisterOpen} className="float-right mt-3 mr-3 py-0"><FaWindowClose size ={28} /></div>
            </div>
            <div className="form">
            <div className="form-toggle"></div>
            <div className="form-panel one">
                <div className="form-header">
                <h1>Register</h1>
                </div>
                <div className="form-content">
                <form>
                    <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required="required"/>
                    </div>
                    <div className="form-group">
                    <label for="username">Email</label>
                    <input type="text" id="username" name="username" required="required"/>
                    </div>
                    <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required="required"/>
                    </div>
                    <div className="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" id="password" name="password" required="required"/>
                    </div>
                    <div className="form-group">
                    <label for="password">Phone Number</label>
                    <input type="password" id="password" name="password" required="required"/>
                    </div>
                    <div className="form-group">
                    <button type="submit">Register</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </Modal>

        {/* Navbar */}
        
        <Navbar style={{backgroundColor:"#fff"}} className='py-0 px-0' expand='md'>
        <div className="navbar-inner header w-100" >
            <Container >
            <NavbarToggler onClick={this.collapseNavbar}><FaBars /></NavbarToggler>
            <div className="brand">
                IN THE CLOUDS <FaCloud style={{textShadow: "1px 1px white, -1px -1px #666"}}/>
            </div>
            <Collapse isOpen = {this.state.isNavCollapsed}    navbar>
                <Nav navbar className="ml-auto">
                <NavItem>
                    <NavLink to="" className="nav-link"  >
                    <FaHome /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='' className="nav-link">
                    <FaClipboard style={{color:"black"}}/>  MyBoard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='' className="nav-link">
                     <FaRegEdit />   Edit Account
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to=""  onClick={this.isLoginOpen} className="nav-link">
                     <FaSignInAlt /> Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink  to="" onClick={this.isRegisterOpen} style={{}} className="nav-link">
                     <FaRegistered />egister
                    </NavLink>
                </NavItem>
                </Nav>
        
            </Collapse>
            </Container>

        </div>
        <br/>
    </Navbar>
    </div>
    )}

}

export default Header