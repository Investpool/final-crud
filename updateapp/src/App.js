import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import { Component } from "react";
import AddUserForm from "./Components/AddUserForm";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { 
                name: "Hubert Mackengam", 
                email: "hub@yahoo.com", 
                group: "10",
                id:"6464646464" 
            }, 
            {   name: "Chris Terry", 
                email: "cud@yahoo.com", 
                group: "20",
                id:"1010101010"
            }, 
            
            {
                name: "Boris Schultz",
                email: "bon@yahoo.com", 
                group: "30",
                id:"767676767676"
            },
            

            ]
        }
    }
    addNewUser = (user) =>{
        user.id = Math.random().toString()
        this.setState({
            users: [...this.state.users,  user]
        });
    }

    deleteUser=(id) =>{
    let undeletedUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
        users: undeletedUsers
    })
    } 
    editUser = (id, updatedUser) =>{
        this.setState({
           users: this.state.users.map(user =>user.id === id ? updatedUser : user)
        })
    }


    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md="4">
                            <AddUserForm  addUser={this.addNewUser} />
                        </Col>
                        <Col>
                            <Users 
                            usersData={this.state.users} 
                            deleteUser={this.deleteUser} 
                            editUser={this.editUser}
                         />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default App;