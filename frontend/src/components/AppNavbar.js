import React, { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export default class AppNavbar extends Component {
    state = {
        collapsed: false
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

  render() {
    return (
    <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">EarthquakePlotter</NavbarBrand>
                <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Plot</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/top10">Last Year Top 10 Earthquakes</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    )
  }
}
