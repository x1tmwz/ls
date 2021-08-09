import React, { useState, useEffect } from 'react';
import { startRemoveWorker, startSetWorkers } from '../actions/workers';
import { connect } from "react-redux";
import Table from '../components/Table';
import Modal from '@material-ui/core/Modal';
import Loading from '../components/Loading';



const WorkersPage = ({ startSetWorkers, workers, startRemoveWorker, history, auth }) => {

    const [columns] = useState(() => {
        return [
            { id: 'firstName', label: 'First name', minWidth: 50 },
            { id: 'lastName', label: 'Last name', minWidth: 50 },
            { id: 'department', label: 'Department', minWidth: 50 }
        ]
    })
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getWorkers = async () => {
            try {
                await startSetWorkers();
                setLoading(false);
            } catch (e) {
                alert(e.message)
            }
        }
        getWorkers();
    }, [startSetWorkers])

    const [open, setOpen] = useState(false);
    const [worker, setWorker] = useState({});

    const onClickOnRow = (data) => {
        if (auth.user && auth.user.role === "user") {
            return;
        }
        setWorker(data)
        handleOpen();
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const deleteWorker = async () => {
        try {
            await startRemoveWorker(worker)
            setWorker({});
            handleClose();
        } catch (e) {
            alert(e.message)
        }


    }
    const updateWorker = () => {
        history.push(`/auth/editWorker/${worker._id}`);
    }

    return (
        <div className="reigster-login-page">
            <h1 className="main-title-sign-in">Workers</h1>
            <div className="flex-c-container center">
                {loading ? <Loading /> : (workers.length > 0 ? <Table rows={workers} columns={columns} onClickRow={onClickOnRow} /> : <h1>There is no workers</h1>)}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="flex-c-container center"
            >
                <div className="modal-body flex-c-container">
                    <h1>Actions</h1>
                    <button onClick={updateWorker} className="green-button">Edit</button>
                    <button onClick={deleteWorker} className="red-button">Delete</button>
                </div>

            </Modal>
        </div>
    )

}
const mapStateToProps = (state) => ({
    workers: state.workers,
    auth: state.auth
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveWorker: (worker) => dispatch(startRemoveWorker(worker)),
    startSetWorkers: () => { dispatch(startSetWorkers()) }
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkersPage);