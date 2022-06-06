import {Response, Request} from "express";
import {IUser} from '../types/request.types';
import UserService from '../services/user.services';
class UserController {
    constructor() {
        console.log('Created instance of CommonController')
    }

    async getUser(req: Request, res: Response) {
        res.json({message:'User route get request'})
    }

   async createUser(req: Request, res: Response) {
        try {
            const user = await UserService.createUser(req.body as IUser);
            res.status(200).json(user);
        } catch (err) {
            res.json(err);
        }
    }

    async deleteUser(req: Request, res: Response) {
        res.json({message:'User route delete request'})
    }

    async login(req: Request, res: Response) {
        res.json({message:'User route login request'})
    }
}

export default new UserController()