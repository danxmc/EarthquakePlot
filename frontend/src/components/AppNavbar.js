import React, { Component, Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class AppNavbar extends Component {
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
    <Fragment>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">EarthquakePlotter</NavbarBrand>
                <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" exact tag={ RRNavLink }>Plotter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/top10" tag={ RRNavLink }>Last Year Top 10 Earthquakes</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </Fragment>
    )
  }
}

export default AppNavbar;