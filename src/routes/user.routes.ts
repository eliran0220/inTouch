import loginMiddlwware from '../middlewares/login.middlewares';
const user_routes = [
    {method : "get", url : "/v1/user/:id", action : "getUser", controller : "UserController"},
    {method : "post", url : "/v1/user", action : "createUser",controller : "UserController"},
    {method : "delete", url : "/v1/user/:user_id", action : "deleteUser",controller : "UserController"},
    {method : "post", url : "/v1/user/login", action : "login",controller : "UserController", middlewares : [loginMiddlwware]}

];

export default user_routes;
