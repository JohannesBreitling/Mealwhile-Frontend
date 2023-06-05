class UserRequest {
    username: string
    firstname: string
    lastname: string
    password: string
    userGroupId: string

    constructor(username: string, firstname: string, lastname: string, password: string, userGroupId: string) {
        this.username = username
        this.firstname = firstname
        this.lastname = lastname
        this.userGroupId = userGroupId
        this.password = password
    }

    getUsername() {
        return this.username;
    }

    getFirstname() {
        return this.firstname;
    }

    getLastname() {
        return this.lastname;
    }

    getPassword() {
        return this.password;
    }

    getUserGroupId() {
        return this.userGroupId;
    }

}