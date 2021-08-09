const defaultState = [
    // { id: 34332, firstName: "tomer", lastName: "merer", department: "clacla" },
    // { id: 2325435, firstName: "moshe", lastName: "we", department: "clacla" },
    // { id: 5431435, firstName: "omer", lastName: "em", department: "clacla" },
    // { id: 345345, firstName: "shavit", lastName: "ar", department: "pizza" },
    // { id: 123345, firstName: "omri", lastName: "ls", department: "serivec" },
    // { id: 5343435, firstName: "ori", lastName: "sa", department: "something" },
]
const workerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_WORKER":
            return [...state, action.worker];
        case "REMOVE_WORKER":
            return state.filter((worker) => worker._id !== action.worker._id);
        case "EDIT_WORKER":
            return state.map((worker) => {
               return (worker._id === action._id) ? { ...worker, ...action.updates } : worker;
            })
        case 'SET_WORKERS':
            return action.workers
        default:
            return state;

    }
}
export default  workerReducer;