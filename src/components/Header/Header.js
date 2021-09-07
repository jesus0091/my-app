import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Navbar className="NavbarTop sticky-top" variant="dark">
            <Container className="container">
                <Navbar.Brand className="link linkBrand" as={Link} to="/">
                    <span className="brandCircle">
                    <FontAwesomeIcon icon={faCircle} />
                    </span>
                    <span className="brandDeco"> deco</span>
                    <span className="brandHome">HOME</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link className="link" href="#pricing">
                    <CartWidget />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
};
export default Header;
