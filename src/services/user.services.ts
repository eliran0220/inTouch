import {IUser} from '../types/request.types';
import {IUserDto} from '../types/dto.types'
import {IUserDb} from '../types/db.types';
import {v4} from 'uuid';
import * as db_service from './db.user.services';
import * as DbUserSqlService from '../services/db.user.services'
import moment from 'moment';
import { DbException } from '../exceptions/db.exception';
class UserService {
    async createUser(user : IUser) {
        const new_user : IUserDb = {
            user_id : v4(),
            ...user,
            created_at : moment().format("DD/MM/YYYY"),
            is_deleted : 0
        };
        const created_user = await db_service.createUser(new_user);
        return created_user;
    } 
    
    async getUser(user_email : string) {
        const created_user :IUserDto = await db_service.getUser(user_email);
        if (created_user) return created_user;
        throw new
    }
}

const userService = new UserService();
export default userService;