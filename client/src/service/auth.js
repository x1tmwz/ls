import request from "./request";

class AuthService {
    LOGINPATH ="/users/login"
    LOGOUTPATH = "/users/logoutAll"
    REGISTERPATH="/users"
    async login(user,password) {
        return (await request(this.LOGINPATH,"POST","",{},{user,password})).data;
    }
    async register(user,password,firstName,lastName){
        return (await request(this.REGISTERPATH,"POST","",{},{user,password,firstName,lastName}));
    }
    async logout(auth) {
        return (await request(this.LOGOUTPATH,"POST",auth.token,{},{id:auth.user._id}));
    }
}

export default AuthService;