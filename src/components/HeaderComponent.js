import React, {Component} from "react";
import { Navbar, NavbarBrand, NavbarToggler,Collapse, NavItem, Nav,
    Form,FormGroup,Button,Label,Input,Modal,ModalHeader,ModalBody } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username"+this.username.value+"password"+this.password.value+"Rem"+
        this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-profile-photos.s3.amazonaws.com/8d/5ec520122f11e6ae4dad4a28c6ddb5/IMG_20160417_131926.jpg?auto=format%2Ccompress&dpr=2&w=40&h=40" height={30} width='40' alt="SD REST"></img>
                    </NavbarBrand>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home ga-lg"></span>Home
                            </NavLink>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info ga-lg"></span>AboutUS
                            </NavLink>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list ga-lg"></span>Menu
                            </NavLink>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-list ga-lg"></span>ContactUS
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={this.toggleModal} className="fa fa-sign-in fa-lg"> Login</Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <div className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-5">
                            <h1>SD Restaurant</h1>
                            <p>We take inspiration from the World's and create a 
                                uniuq funtion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" name="username" id="username"
                                innerRef={(input) => this.username = input}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" id="password"
                                innerRef={(input) => this.password = input}></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check><Input type="checkbox" name="remember" 
                            id="remember"
                            innerRef={(input) => this.remember = input}
                            ></Input>Remberme</Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header;