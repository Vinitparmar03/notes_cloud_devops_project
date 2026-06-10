import {v4 as uuid} from "uuid";

class User {
    constructor(name, email, password) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = new Date().toISOString;
    }
}

export default User