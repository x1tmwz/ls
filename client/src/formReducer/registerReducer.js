import Validate from '../utils/Validate'

const SET_NAME = "SET_NAME"
const SET_LAST_NAME = "SET_LAST_NAME"
const SET_PASSWORD = "SET_PASSWORD"
const SET_RETYPE_PASSWORD = "SET_RETYPE_PASSWORD"
const SET_EMAIL = "SET_EMAIL"
const TOGGLE_SHOW_PASSWORD = "TOGGLE_SHOW_PASSWORD"
const TOGGLE_SHOW_RETYPE_PASSWORD = "TOGGLE_SHOW_RETYPE_PASSWORD"
const defaultState = {
    password: '',
    retypePassword: '',
    showRetypePassword: false,
    showPassword: false,
    email: '',
    firstName: '',
    lastName: '',
    passwordError: false,
    retypePasswordError: false,
    emailError: false,
}

const init = (start) => {
    return start? Object.assign(defaultState,start):defaultState;
}
function reducer(state, action) {
    const validate = new Validate();
    switch (action.type) {
        case SET_NAME:
            return { ...state, firstName: action.payload };
        case SET_LAST_NAME:
            return { ...state, lastName: action.payload };
        case TOGGLE_SHOW_PASSWORD:
            return { ...state, showPassword: !state.showPassword };
        case TOGGLE_SHOW_RETYPE_PASSWORD:
            return { ...state, showRetypePassword: !state.showRetypePassword };
        case SET_PASSWORD:
            return validate.validPassword(action.payload) ? { ...state, password: action.payload,retypePassword:"" ,passwordError: false } : { ...state, password: action.payload,retypePassword:"",passwordError: true };
        case SET_RETYPE_PASSWORD:
            return validate.validRetypePassword(state.password, action.payload) ? { ...state, retypePassword: action.payload, retypePasswordError: false } : { ...state, retypePassword: action.payload, retypePasswordError: true };
        case SET_EMAIL:
            return validate.validEmail(action.payload) ? { ...state, email: action.payload, emailError: false } : { ...state, email: action.payload, emailError: true };
        default:
            return state;
    }
}
const setName = (payload) => ({
    type: SET_NAME,
    payload
})
const setLastName = (payload) => ({
    type: SET_LAST_NAME,
    payload
})
const setEmail = (payload) => ({
    type: SET_EMAIL,
    payload
})
const setPassword = (payload) => ({
    type: SET_PASSWORD,
    payload
})
const setRetypePassword = (payload) => ({
    type: SET_RETYPE_PASSWORD,
    payload
})
const toggleShowPassword = () => ({
    type: TOGGLE_SHOW_PASSWORD
})
const toggleShowRetypePassword = () => ({
    type: TOGGLE_SHOW_RETYPE_PASSWORD
})

export { init, reducer, setName, setLastName, setEmail, setPassword, setRetypePassword, toggleShowPassword, toggleShowRetypePassword,defaultState };


