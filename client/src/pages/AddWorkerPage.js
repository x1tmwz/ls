import React from 'react';
import WorkerForm from '../components/forms/WorkerForm';
import { startAddWorker } from '../actions/workers';
import { connect } from "react-redux";


const AddWorkerPage = (props) => {

    const submitNewWorker = async (worker) => {
        try{
            await props.startAddWorker(worker)
            alert("add success")
        }catch(e){
            alert(e.message);
        }
    }

    return (
        <div className="reigster-login-page">
            <h1 className="main-title-sign-in">Add Worker</h1>
            <div className="reigster-login-form-container">
                <WorkerForm submit={submitNewWorker} />
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => ({
    startAddWorker: (worker) => dispatch(startAddWorker(worker))
})
export default connect(undefined,mapDispatchToProps)(AddWorkerPage);