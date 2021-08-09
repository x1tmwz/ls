import AuthService from "../service/auth";


const login = ({ user, token, role } = {}) => ({
    type: "LOG_IN",
    user,
    token,
    role
})

const logout = () => ({
    type: "LOG_OUT"
})

const startLoginIn = (user = "", password = "") => {
    return async (dispatch) => {
        const authService = new AuthService();
        const result = await authService.login(user, password);
        dispatch(login(result))

    };
}

const startLogOut = () => {
    return async (dispatch, getState) => {
        const auth = getState().auth
        const authService = new AuthService();
        await authService.logout(auth);
        dispatch(logout());

    };
}
const register = async (user = "", password = "", firstName, lastName) => {
    const authService = new AuthService();
    await authService.register(user, password, firstName, lastName);
}

export { startLoginIn, startLogOut, register }