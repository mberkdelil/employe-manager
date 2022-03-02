import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { addEmploye, deleteEmploye, editEmploye } from '../actions';

const EditEmploye = (props) => {

    const employe = props.employe;
    const [employes, setEmployes] = useState({
        id: employe.id, name: employe.name, email: employe.email, address: employe.address,
        phone: employe.phone, image: employe.image
    });

    const showEditAlert = () => {
        props.setEditAlert(true);
        setTimeout(() => {
            props.setEditAlert(false);
        }, 5000);
    }

    return (
        <Form >

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    required
                    value={employes.name}
                    onChange={e => setEmployes({ ...employes, name: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    required
                    value={employes.email}
                    onChange={e => setEmployes({ ...employes, email: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    rows={3}
                    value={employes.address}
                    onChange={e => setEmployes({ ...employes, address: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={employes.phone}
                    onChange={e => setEmployes({ ...employes, phone: e.target.value })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={employes.image}
                    onChange={e => setEmployes({ ...employes, image: e.target.value })}
                />
            </Form.Group>

            <Button onClick={e => {
                e.preventDefault();
                props.editEmploye(employes);
                showEditAlert();
            }} variant="success" type="submit" block="true">
                Update Employee
            </Button>
        </Form>
    )
}

export default connect(null, { addEmploye, deleteEmploye, editEmploye })(EditEmploye);