import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin =this.handleLogin.bind(this)
  }
  handleLogin=(event)=>{
    alert(this.username.value + " " + this.password.value + " "+ this.remember.checked)
    event.preventDefault();

  }
toggleModal=()=>{
  this.setState({
    isModalOpen : !this.state.isModalOpen

  })
}
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar dark color="secondary" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button onClick={this.toggleModal}><span className="fa fa-sign-in"></span> Login</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h2>TheReactCourse</h2>
                <p>
                  Qui proident elit aliquip et tempor esse magna commodo. Irure
                  in nisi ea commodo ad ipsum cupidatat amet ut laboris quis
                  duis quis. Ex est minim quis cupidatat. Exercitation tempor
                  cillum do eu enim anim sint fugiat id proident magna et.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Input type="text" id="username" name="username" placeholder="Username" 
                innerRef ={(input)=> this.username = input}/>
              </FormGroup>
              <FormGroup>
                <Input type="password" id="password" name="password" placeholder="Password"
                innerRef ={(input)=> this.password = input}/>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" id="remember" name="remember" 
                innerRef ={(input)=> this.remember = input}/>
                <Label htmlFor="remember">Remember me</Label>
              </FormGroup>
              <FormGroup>
                <Button color="primary" value="submit" type="submit">Login</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Header;
