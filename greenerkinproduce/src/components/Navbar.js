import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">                                
                        <NavDropdown  title="One" id="basic-nav-dropdown">
                        <MenuItem href="/one">One</MenuItem>
                            <MenuItem href="/OneA">OneA</MenuItem>
                            <MenuItem href="/OneB">OneB</MenuItem>                    
                        </NavDropdown>  

                        <NavItem href="./two">Two</NavItem>   

                        <NavItem href="./three">Three</NavItem> 

                        <NavDropdown  title="Four" id="basic-nav-dropdown">
                        <MenuItem href="/four">Four</MenuItem>
                            <MenuItem href="/fourA">FourA</MenuItem>
                            <MenuItem href="/fourB">FourB</MenuItem>                    
                        </NavDropdown>  
                         
                        <NavDropdown  title="Five" id="basic-nav-dropdown">
                        <MenuItem href="/four">Five</MenuItem>
                            <MenuItem href="/fiveA">FiveA</MenuItem>
                            <MenuItem href="/fiveB">FiveB</MenuItem>     
                            <MenuItem href="/fiveC">FiveC</MenuItem>
                            <MenuItem href="/fiveD">FiveD</MenuItem>
                            <MenuItem href="/fiveE">FiveE</MenuItem>
                            <MenuItem href="/fiveF">FiveF</MenuItem>
                            <MenuItem href="/fiveG">FiveG</MenuItem>
                            <MenuItem href="/fiveH">FiveH</MenuItem>               
                        </NavDropdown>
                        
                        <NavItem href="./six">Six</NavItem> 

                        <NavItem href="./seven">Seven</NavItem> 

                        <NavItem href="./eight">Eight</NavItem> 

                        <NavDropdown  title="Nine" id="basic-nav-dropdown">
                        <MenuItem href="/nine">Nine</MenuItem>
                            <MenuItem href="/nineA">NineA</MenuItem>
                            <MenuItem href="/nineB">NineB</MenuItem>                    
                        </NavDropdown>  


                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        );
    }
}
export default Navigation;