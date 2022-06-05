import user_routes from '../routes/user.routes';
import posts_routes from '../routes/posts.routes'
import UserController from '../controllers/users.controller';
import PostsController from '../controllers/posts.controller';
import * as Middlewares from '../'

export const routes = [...user_routes,...posts_routes];

export const controllersMapping = {
    "UserController" : UserController,
    "PostsController" : PostsController
};


