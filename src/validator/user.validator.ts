import {IUser} from '../types/request.types';
import * as ValidationUtilities from '../utilities/validation.utilities';
export const validateUser = (user : IUser) => {
    let error : string;
    const {username, password, first_name, last_name, email} = user;
    
}