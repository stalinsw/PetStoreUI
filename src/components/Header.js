import React from 'react'
import "./Header.css"
import {Button, Table, Nav, Navbar, Container} from 'react-bootstrap';
import { useState } from 'react';

const Header = (props) => {
   // const headingStyle = { color : "blue"}

 const clickHandle = () =>{
    console.log("You clicked me")}

const dblclickHandle = (name) =>{
    alert("Hello " + name)
}
const onchangeHandle = () =>{
    alert("Text changed from empty")
}
const mousehoverHandle = () =>{
    alert("Hello, you hovered over the text")
}
const keypressHandle = () =>{
    alert("Hello, you pressed a key")
}

const [count, setCount] = useState(0);

const increment = () =>{
  setCount(count + 1)
}
const decrement = () =>{
  setCount(count - 1)
}

  return (
    <div className="App">
         {/* { <h1 style={{color: "red"}}>Hello Worlddd</h1>
         <h2 className='para'>Hello Lokame</h2>
         <h2 className='para2'>Hello Duniya</h2> 
         } */}
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <h1>Hello Frnds</h1>
    <Button variant="warning">Click me</Button>
    <br />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Button onClick={clickHandle} variant="success">Click me</Button>
    <br />
    <input onKeyDown={keypressHandle} type='text'></input>
    <h2 onDoubleClick={() =>dblclickHandle("suman")}>Double click me</h2>
    <input onChange={onchangeHandle} type='text'></input>
    <h3 onMouseOver={mousehoverHandle}>Text here</h3>
    <br/>
    <br/>
    <h1>Counter is counting to {count}</h1>
    <Button onClick={increment} className='m-3 bg-success'>+</Button>
    <Button onClick={decrement} className='m-3 bg-danger'>-</Button>
 </div>

)
}
export default Header