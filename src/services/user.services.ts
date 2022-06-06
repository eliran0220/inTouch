import {IUser} from '../types/request.types';
import {IUserDto} from '../types/dto.types'
import {IUserDb} from '../types/db.types';
import {v4} from 'uuid';
import * as db_service from './db.user.services';
import * as DbUserSqlService from '../services/db.user.services'
import moment from 'moment';
class UserService {
    async createUser(user : IUser) {
        try{
            const new_user : IUserDb = {
               user_id : v4(),
                ...user,
                created_at : moment().format("DD/MM/YYYY")
            };
            await db_service.createUser(new_user);
        } catch (err) {
            throw err;
        }
    }
}

const userService = new UserService();
export default userService;