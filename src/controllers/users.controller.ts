import {Response, Request} from "express";
import {IUser} from '../types/request.types';
import UserService from '../services/user.services';
import {IErrorResponse, ISuccessResponse } from "../types/response.types";
class UserController {
    constructor() {
        console.log('Created instance of CommonController')
    }

    async getUser(req: Request, res: Response) {
        const user = await UserService.getUser(req.params.id);
        const response : ISuccessResponse = {
            status:200,
            message : 'User has been retrieved succesfully!',
            data : user
        };
        res.status(response.status).json(response);

    }

   async createUser(req: Request, res: Response) {
        const created_user = await UserService.createUser(req.body as IUser);
        const response : ISuccessResponse = {
            status:200,
            message : 'User has been created succesfully!',
            data : created_user
        };
       res.status(response.status).json(response);
    }



    async deleteUser(req: Request, res: Response) {
        res.json({message:'User route delete request'})
    }

    async login(req: Request, res: Response) {
        res.json({message:'User route login request'})
    }
}

export default new UserController()