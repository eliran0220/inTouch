import {IUser} from '../types/request.types';
import {IUserDto} from '../types/dto.types'
import {IUserDb} from '../types/db.types';
import {v4} from 'uuid';
import * as db_service from './db.user.services';
import * as DbUserSqlService from '../services/db.user.services'
import moment from 'moment';
import { DbException } from '../exceptions/db.exception';
import { NotFoundException } from '../exceptions/not-found.exceptions';
import {validateEmail, validateUser} from '../validator/user.validator';
import { ErrorAcumalator } from '../types/common.types';
import { ValidationException } from '../exceptions/validation.exception';
import {ResouceNotFoundMapper, StatusCodes,ValidationErrors} from '../utilities/constants.utilities';
import { hashUserPassword } from '../utilities/common.utils';

class UserService {
    async createUser(user : IUser) {
        const errors = validateUser(user);
        if (Object.keys(errors).length > 0) throw new ValidationException(errors,StatusCodes.BAD_REQUEST);
        user.password = await hashUserPassword(user.password);
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
        if (!validateEmail(user_email)) throw new ValidationException(ValidationErrors.INVALID_EMAIL,StatusCodes.BAD_REQUEST);
        const user :IUserDto = await db_service.getUser(user_email);
        if (user) return user;
        throw new NotFoundException(ResouceNotFoundMapper(user_email,"INVALID_EMAIL"),StatusCodes.BAD_REQUEST);
    }
}

const userService = new UserService();
export default userService;