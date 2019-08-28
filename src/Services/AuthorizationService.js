export default class AuthorizationService {
    static isAuthorized(){
        return localStorage.getItem("user") !== null;
    }
    static authorize(username){
        localStorage.setItem('user', username);
    }
    static logout(){
        localStorage.removeItem("user");
    }
}
