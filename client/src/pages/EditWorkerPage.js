import React from 'react';
import WorkerForm from '../components/forms/WorkerForm';
import { connect } from "react-redux";
import { startEditWorker } from '../actions/workers';


const EditWorkerPage = ({ worker, startEditWorker,history }) => {
    const submit = (updates) => {
        try{
            startEditWorker(worker,updates);
            alert("edit success")
            history.push(`/auth/workers`);
        }catch(e){
            alert(e.message)
        }
       
    }
    return (
        <div className="reigster-login-page">
            <h1 className="main-title-sign-in">Edit Worker</h1>
            <div className="reigster-login-form-container">
                <WorkerForm
                    submit={submit}
                    firstName={worker ? worker.firstName : ""}
                    lastName={worker ? worker.lastName : ""}
                    department={worker ? worker.department : ""}
                />
            </div>
        </div>
    )

}

const mapStateToProps = (state, props) => ({
    worker: state.workers.find((worker) => {
        return worker._id === props.match.params.id
    })
})
const mapDispatchToProps = (dispatch) => ({
    startEditWorker: (worker,updates) => dispatch(startEditWorker(worker,updates))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditWorkerPage);