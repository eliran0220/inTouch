import {Express,Request,Response,NextFunction,RequestHandler} from 'express';
import user_routes from '../routes/user.routes';
import posts_routes from '../routes/posts.routes'
import UserController from '../controllers/users.controller';
import PostsController from '../controllers/posts.controller';
import * as utilities from '../utilities/common.utils';
import { IResponse, ISuccessResponse } from '../types/response.types';
import AsyncReqHandler from '../types/catcher.types';
export const routes = [...user_routes,...posts_routes];

export const controllersMapping = {
    "UserController" : UserController,
    "PostsController" : PostsController
};


export const routeBuilder = (app : Express,route : Route) : void => {
    const {method, url, action, controller,middlewares} = route;
    const Controller = utilities.controllersMapping[controller];
    middlewares ? app.route(url)[method](...middlewares,errorWrapper(Controller[action])) : app.route(url)[method](errorWrapper(Controller[action]));
}


export default function errorWrapper(routingFunc: AsyncReqHandler | RequestHandler):AsyncReqHandler {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await routingFunc(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}

                                


