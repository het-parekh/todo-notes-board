import React,{Component} from 'react'
import {Container,Navbar,Nav, NavbarToggler, Collapse, NavItem, Modal, } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { FaHome,FaClipboard,FaRegEdit,FaCloud,FaBars, FaSignInAlt, FaRegistered,
        FaWindowClose,FaRegArrowAltCircleLeft}  from  'react-icons/fa'
import { Control, Form, Errors, actions } from 'react-redux-form'


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Header extends Component{
    constructor(props){
        super(props)
        this.collapseNavbar = this.collapseNavbar.bind(this)
        this.isLoginOpen = this.isLoginOpen.bind(this)
        this.isRegisterOpen = this.isRegisterOpen.bind(this)
        this.switchmodals = this.switchmodals.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.isDoctor = this.isDoctor.bind(this)
        this.state = {
            isNavCollapsed:false,
            isLoginOpen:false,
            isRegisterOpen:false,
            password:'',
            confirm_password:'',
            isDoctor:false
        }
    }
    isDoctor(){
        this.setState({
            isDoctor:!this.state.isDoctor
        })
    }

    handleRegister(values){
        console.log(values)
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
                <form >
                    <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="name" required="required"/>
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
                    <button   type="button">Log In</button>
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
                <Form model="register" onSubmit={(values) => this.handleRegister(values)} validators={{'':{passwordsMatch: (val) => val.password === val.confirm_password}}}>
                    
                    <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            passwordsMatch: 'Passwords do not match'
                        }}
                    />
                    <div className="form-group">
                    <label for="name" >Username</label>
                    <Control.text model=".name" id="name" name="name"
                        placeholder="Username"
                        className="form-control"
                        required
                        validators = {{minLength: minLength(3),maxLength: maxLength(15)}}
                            />
                        <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                        />
                    </div>
                    <div className="form-group">
                    <label for="email">Email</label>                   
                        <Control type="email" model=".email" id="email" name="email"
                            placeholder="Email"
                            required
                            className="form-control" />
                        <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                        />
                   
                    </div>
                    <div className="form-group">
                    <label for="password">Password</label>
                    <Control type="password" model="password" id="password" name="password"
                            placeholder="Password"
                            required
                            className="form-control"
                                />
                    </div>

                    <div className="form-group">
                    <label for="confirm_password">Confirm Password</label>
                    <Control type="password" model="confirm_password" id="confirm_password" name="confirm_password"
                            placeholder="Confirm Password"
                            required
                            className="form-control"
                            // validators = {{passwordsMatch:(passwordsMatch)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".confirm_password"
                        show="touched"
                        messages={{
                            passwordsMatch: 'Password do not match',
                        }}
                        />
                    </div>
                   
                    <div className="form-group">
                    <label for="mobile">Phone Number</label>                   
                        <Control type="tel" model=".mobile" id="mobile" name="mobile"
                            placeholder="Phone Number"
                            className="form-control"
                            required
                                />
                    
                    </div>
                    <div className="form-group">
                    <button type="button" onClick={this.handleInput} >Register</button>
                    </div>
                </Form>
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