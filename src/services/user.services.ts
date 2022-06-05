import {IUser} from '../types/request.types';
import {IUserDto} from '../types/dto.types'
import {IUserDb} from '../types/db.types';
import pkg from 'uuid';
const { v4: uuidv4 } = pkg;
import * as DbUserSqlService from '../services/db.user.services'
class UserService {
    async createUser(user : IUser) : Promise<IUserDto> {
        // validate user
        const user_id = uuidv4();
        const user_row =
    }
    
    
}

const userService = new UserService();
export default userService;