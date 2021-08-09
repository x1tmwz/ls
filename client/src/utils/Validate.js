class Validate {
    validPassword(password) {
        if (!password) {
            return true;
        }
        return password.length >= 8
    }
    validRetypePassword(password, retypePassword) {
        return password === retypePassword;
    }
    validEmail(email) {
        if (!email) {
            return true;
        }
        const reg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
        return reg.test(email);
    }
    isObjectPropsHaveValues(obj, keysList = []) {
        if (keysList.length > 0) {
            for (let i = 0; i < keysList.length; i++) {
                if (!obj[keysList[i]] || obj[keysList[i]] === undefined || (Array.isArray(obj[keysList[i]]) && obj[keysList[i]].length === 0) || obj[keysList[i]] === null) {
                    return false;
                }
            }
            return true;
        }
        const keys = Object.keys(obj)
        if (keys.length === 0) {
            return false
        }
        for (let i = 0; i < keys.length; i++) {
            if (!obj[keys[i]]) {
                return false;
            }
        }
        return true;
    }
    isErrors(errors=[]){
        //get array of bool and return if false;
        for(let i =0 ;i<errors.length;i++){
            if(errors[i]){
                return true;
            }
        }
        return false
    }

}
export default Validate;