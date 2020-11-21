import React, { Component } from 'react' 
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/button'
import axios from 'axios'



export default class CreateStudent extends Component { 

constructor(props){ 
    super(props)

    // setting the submit form to have an action 
    this.onChangeStudentName = this.onChangeStudentName.bind(this); 
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // the up state 
    this.state = {
        name: '',
        email: '',
       
    }
}

onChangeStudentName(e) { 
    this.setState({name: e.target.value})
}

onChangeStudentEmail(e) { 
    this.setState({email: e.target.value})
}



// let me know that the code is running correctly 
onSubmit(e) { 
    e.preventDefault()

    const studentObject = { 
        name: this.state.name,
        email: this.state.email,
        rollno: this.state.rollno
    }
axios.post('http://localhost:4000/students/create-student', studentObject)
this.setState({name: '', email: '',})
}
    render() { 
        return (
            <div>
        <Form>

            <Form.Group controlId="Name">
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} placeholder="Name" />
             </Form.Group>

            <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} placeholder="Email" />
            </Form.Group>

           

            <Button variant="primary" type="submit">
            Create 
            </Button>
    </Form>
 </div>
        )
    }
}