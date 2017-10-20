import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { authUser, signOutUser } from "./libs/awsLib";
import "./App.css";

class App extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    isAuthenticated: false,
			isAuthenticating: true
	  };
	}

	async componentDidMount() {
	  try {
	    if (await authUser()) {
	      this.userHasAuthenticated(true);
	    }
	  }
	  catch(e) {
	    alert(e);
	  }

	  this.setState({ isAuthenticating: false });
	}

	handleLogout = event => {
	  signOutUser();

	  this.userHasAuthenticated(false);
		this.props.history.push("/login");

	}

	userHasAuthenticated = authenticated => {
	  this.setState({ isAuthenticated: authenticated });
	}
  render() {
		const childProps = {
	    isAuthenticated: this.state.isAuthenticated,
	    userHasAuthenticated: this.userHasAuthenticated
	  };
    return (
			!this.state.isAuthenticating &&
		    <div className="App container">
		      <Navbar fluid collapseOnSelect>
		        <Navbar.Header>
		          <Navbar.Brand>
		            <Link to="/">Scratch</Link>
		          </Navbar.Brand>
		          <Navbar.Toggle />
		        </Navbar.Header>
		        <Navbar.Collapse>
		          <Nav pullRight>
		            {this.state.isAuthenticated
		              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
		              : [
		                  <RouteNavItem key={1} href="/signup">
		                    Signup
		                  </RouteNavItem>,
		                  <RouteNavItem key={2} href="/login">
		                    Login
		                  </RouteNavItem>
		                ]}
		          </Nav>
		        </Navbar.Collapse>
		      </Navbar>
		      <Routes childProps={childProps} />
		    </div>
    );
  }
}

export default withRouter(App);
