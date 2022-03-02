import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { addEmploye } from '../actions';
import { connect } from "react-redux"

const AddEmploye = (props) => {

    const id = props.employe.length + 1;

    const [employe, setEmploye] = useState({ id: id, name: "", email: "", address: "", phone: "", image: "" });

    const closeAlert = () => {
        props.setShowAlert(true);
        setTimeout(() => {
            props.setShowAlert(false);
        }, 5000);
    };

    return (
        <Form  >

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    required
                    value={employe.name}
                    onChange={e => setEmploye({ ...employe, name: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    required
                    value={employe.email}
                    onChange={e => setEmploye({ ...employe, email: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    rows={3}
                    value={employe.address}
                    onChange={e => setEmploye({ ...employe, address: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={employe.phone}
                    onChange={e => setEmploye({ ...employe, phone: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Image URL *"
                    name="image"
                    required
                    value={employe.image}
                    onChange={e => setEmploye({ ...employe, image: e.target.value })}
                />
            </Form.Group>

            <Button onClick={(e) => {
                e.preventDefault();
                props.addEmploye(employe);
                setEmploye({ name: "", email: "", address: "", phone: "" });
                closeAlert();
            }} variant="success" type="submit" block="true">
                Add New Employee
            </Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        employe: state.employe
    }
}

export default connect(mapStateToProps, { addEmploye })(AddEmploye);