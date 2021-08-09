import request from "./request";

class WorkresService {
    ADDWORKERPATH = "/workers"
    EDITWORKERPATH = "/workers"
    REMOVEWORKERPATH = "/workers"
    GETWORKERSPATH = "/workers"

    async addNewWorker(data, token) {
        return await (request(this.ADDWORKERPATH, "POST", token, {}, data, {}));
    }
    async editWorker(data, token) {
        return await (request(this.EDITWORKERPATH + "/" + data._id, "PATCH", token, {}, data, {}));
    }
    async removeWorker(data, token) {
        return await (request(this.REMOVEWORKERPATH + "/" + data._id, "DELETE", token, {}, data, {}));
    }
    async getAllWorkers(token, params) {
        return await (request(this.GETWORKERSPATH, "GET", token, {}, {}, {}, params));
    }
}

export default WorkresService;