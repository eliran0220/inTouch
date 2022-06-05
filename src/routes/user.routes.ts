const user_routes = [
    {method : "get", url : "/v1/users", action : "getUsers", controller : "UserController"},
    {method : "post", url : "/v1/users/", action : "postUser",controller : "UserController"},
    {method : "delete", url : "/v1/users/:user_id", action : "deleteUser",controller : "UserController"}
];

export default user_routes;
