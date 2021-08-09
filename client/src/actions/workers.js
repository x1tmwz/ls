import WorkresService from "../service/workers";

const setWorkers = (workers) => ({
    type: 'SET_WORKERS',
    workers
})
const addWorker = (worker) => ({
    type: 'ADD_WORKER',
    worker
})
const editWorker = (id, updates) => ({
    type: 'EDIT_WORKER',
    id,
    updates
})
const removeWorker = (worker) => ({
    type: 'REMOVE_WORKER',
    worker
})

const startAddWorker = (worker = {}) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const workresService = new WorkresService();
        await workresService.addNewWorker(worker, token);
        dispatch(addWorker(worker));
    };
}
const startRemoveWorker = (worker) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const workresService = new WorkresService();
        await workresService.removeWorker(worker, token);
        dispatch(removeWorker(worker));
    }
}

const startEditWorker = (wokrer,updates) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const workresService = new WorkresService();
        await workresService.editWorker(Object.assign(wokrer,updates), token);
        dispatch(editWorker(wokrer));
    }
}



const startSetWorkers = (params) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const workresService = new WorkresService();
        const result = await workresService.getAllWorkers(token, params);
        dispatch(setWorkers(result.data));
    }
}


export {
    startAddWorker,
    startSetWorkers,
    startEditWorker,
    startRemoveWorker,
    addWorker,
    editWorker,
    removeWorker,
    setWorkers
};