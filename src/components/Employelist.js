import React, { useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import AddEmploye from './AddEmploye'
import Employe from './Employe'
import Pages from './Pages'
import { searchEmploye } from '../actions'

const Employelist = (props) => {

    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }

    const [showAlert, setShowAlert] = useState(false);
    const [editAlert, setEditAlert] = useState(false);

    const [deleteAlert, setDeleteAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2);

    const sortedEmployees = props.employe.sort((a, b) => a.name.localeCompare(b.name));

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage)

    const [search, setSearch] = useState("");

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <input onChange={(e) => {
                            e.preventDefault();
                            setSearch(e.target.value);
                            props.searchEmploye(search);
                        }} type="text" placeholder='Search Employe...' style={{ width: "180px" }} />&nbsp;
                        <Button onClick={openModal} className="btn btn-success text-white" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} onClose={() => setShowAlert(false)} variant="success" dismissible>
                New Employee Successfully Added!.
            </Alert>

            <Alert show={editAlert} onClose={() => setEditAlert(false)} variant="success" dismissible>
                Employee Information Has Been Successfully Updated!.
            </Alert>

            <Alert show={deleteAlert} onClose={() => setDeleteAlert(false)} variant="success" dismissible>
                Employee Successfully Deleted!.
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr style={{ textDecoration: "underline" }}>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        currentEmployees.map(emp => (
                            <tr key={emp.id} >
                                <Employe deleteAlert={deleteAlert} setDeleteAlert={setDeleteAlert} editAlert={editAlert}
                                    setEditAlert={setEditAlert} employe={emp} />
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <Pages pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees={currentEmployees}
                sortedEmployees={sortedEmployees} />

            <Modal show={show} onHide={closeModal}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEmploye showAlert={showAlert} setShowAlert={setShowAlert} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = state => {
    return {
        employe: state.employe
    }
}

export default connect(mapStateToProps, { searchEmploye })(Employelist);