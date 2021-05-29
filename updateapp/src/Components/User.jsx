import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";




const User = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id);

    };


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserForm
                        userInfo={props.userInfo}
                        editUser={props.editUser}
                        closeModal={handleClose} />
                </Modal.Body>

            </Modal>


            <Col md="4" style={{ marginTop: "1rem" }} >
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            CODETRAIN USER
               </Card.Subtitle>
                        <Card.Title>{props.userInfo.name} </Card.Title>
                        <Card.Text>
                            <p>Email:{props.userInfo.email} </p>
                            <p>Group:{props.userInfo.group} </p>
                        </Card.Text>
                        <Button className="btn btn-default" size="sm" style={{ marginRight: "1 rem" }} onClick={handleShow}>Edit</Button>
                        <Button variant="danger"
                            size="sm" style={{ marginLeft: "1rem" }}
                            onClick={handleDelete}>Delete
             </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>


    );
}

export default User;