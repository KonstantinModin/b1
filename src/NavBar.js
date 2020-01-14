import React, { useRef, useEffect, useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
  const nav = useRef();
  // const [offset, setOfset ] = useState(null);

  useEffect(()=>{
    const sticky = window.scrollY >= nav.current.offsetTop;
    console.log(sticky, window.scrollY);
  },[window.scrollY]);

  console.log(window);


  return (
    <Navbar bg="dark" variant="dark" ref={nav} >
      {/* {nav.current&&nav.current.offsetTop} */}
      {/* {sticky.toString()} */}
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
