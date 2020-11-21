import React from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import CreateStudent from "./components/create-student.component."
import EditStudent from "./components/student-edit.component"
import StudentList from "./components/student-list.component"


function App() {
  return (<Router>
    <div className="App">
      <header className="App-haeder">

      <Navbar bg="primary" variant="dark">
        <Container>
  
    <Navbar.Brand>
    <Link to={"/create-student"} className="nav-link">
        React App 
      </Link>
    </Navbar.Brand>

    <Nav className="mr-auto">
    <Link to={"/create-student"} className="nav-link">
        Create Student 
      </Link>
    </Nav>

    <Nav className="mr-auto">
        <Link to={"/editstudent/:id"} className="nav-link">
          Edit Student 
          </Link> 

      </Nav>

    <Nav className="mr-auto">
     <Link to={"/student-list"} className="nav-link">
       Student List 
     </Link>
    </Nav>

   </Container>
  </Navbar>

      </header>
      <Container>
        <Row>
          <Col md={12}> 
          <div className="wrapper">
            <Switch>

              <Route exact path='/' component={CreateStudent}/>
              <Route path="/create" component={CreateStudent}/>
              <Route path="/editstudent/:id" component={EditStudent}/>
              <Route path="/studentlist" component={StudentList}/>

          </Switch>
        </div>
      </Col>
    </Row>
</Container>
 </div>
  </Router>);
  
}

export default App;
