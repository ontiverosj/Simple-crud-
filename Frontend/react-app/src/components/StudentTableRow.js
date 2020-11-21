import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from "react-bootstrap/Button";


export default class StudentTableRow extends Component { 

constructor(props) { 
    super(props); 
    this.deleteStudent = this.deleteStudent.bind(this);
}
deleteStudent() { 
     axios.delete('http://localhost:4000/students/update-student/' + this.props.obj._id)
    .then((res)=> { 
    console.log('Student Successfully updated')
}).catch((error) => {
    console.log(error)
    })

}

    render() { 
        return ( 
            <tr> 
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.name}</td>
                
            <td>

            <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                Edit
            </Link>
            <Button size="sm"  onClick={this.deleteStudent} variant="danger">Delete</Button>
            </td>

            </tr>
        );
    }
}