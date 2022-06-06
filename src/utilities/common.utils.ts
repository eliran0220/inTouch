import {Express} from 'express';
import user_routes from '../routes/user.routes';
import posts_routes from '../routes/posts.routes'
import UserController from '../controllers/users.controller';
import PostsController from '../controllers/posts.controller';
import * as utilities from '../utilities/common.utils';

export const routes = [...user_routes,...posts_routes];

export const controllersMapping = {
    "UserController" : UserController,
    "PostsController" : PostsController
};

export const routeBuilder = (app : Express,route : Route) : void => {
    console.log(route);
    const {method, url, action, controller,middlewares} = route;
    const Controller = utilities.controllersMapping[controller];
    middlewares ? app.route(url)[method](...middlewares,Controller[action]) : app.route(url)[method](Controller[action]);
}


