import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";



class EditUserForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name: props.userInfo.name,
            email: props.userInfo.email,
            group: props.userInfo.group,
            id: props.userInfo.id,
        };
    }
    handleChange = (e) =>{
    e.preventDefault();
    this.setState({
        [e.target.name] : e.target.value
    })
   

}
    
    handleSubmit =(e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            name: "",
            email: "",
            group: "",
            id: "",
            
        });
        this.props.closeModal();
};




    render(){
        return(
        <Form onSubmit = {this.handleSubmit}>
            <Form.Group controlled="formBasicName">
            <Form.Label>NAME </Form.Label>
            <Form.Control  type="text" 
            placeholder="Enter name"  name="name" 
            value={this.state.name}
            onChange={this.handleChange} />
            </Form.Group>
            
            <Form.Group controlled="formBasicEmail" >
            <Form.Label>EMAIL</Form.Label>
            <Form.Control  type="email"
            placeholder="" name="email" 
            value={this.state.email}
            onChange={this.handleChange}/>
            </Form.Group>
            
            <Form.Group controlled= "formbasicGroup">
            <Form.Label> GROUP </Form.Label>
            <Form.Control  type="text" 
            placeholder="" name="group" 
            value={this.state.group}
            onChange={this.handleChange}/> 
            </Form.Group>
            
            
            <Button variant="btn btn-primary" type="submit" style={{marginTop:"2rem"}}>Submit</Button>
        </Form>
            
             )
    }
}

export default EditUserForm;
       


