import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import EditEmploye from './EditEmploye'
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { connect } from 'react-redux'
import { deleteEmploye } from '../actions'

const Employe = (props) => {

    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }

    const showDeleteAlert = () => {
        props.setDeleteAlert(true);
        setTimeout(() => {
            props.setDeleteAlert(false);
        }, 5000);
    }

    return (
        <>
            <td><img style={{ width: "40px", height: "40px" }} src={props.employe.image} alt="" /></td>
            <td>{props.employe.name}</td>
            <td>{props.employe.email}</td>
            <td>{props.employe.address}</td>
            <td>{props.employe.phone}</td>
            <td>
                <AiFillEdit onClick={openModal} title='Edit Employe' /> &emsp;
                <AiFillDelete onClick={() => {
                    props.deleteEmploye(props.employe.id)
                    showDeleteAlert();
                }} title="Delete Employe" />
            </td>

            <Modal show={show} onHide={closeModal} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Update Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEmploye editAlert={props.editAlert} setEditAlert={props.setEditAlert} employe={props.employe} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal} >
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default connect(null, { deleteEmploye })(Employe)