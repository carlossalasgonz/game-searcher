import { Component } from "react";
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';

class Header extends Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src="https://via.placeholder.com/100x30"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        )
    }
}

export default Header;