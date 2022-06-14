import { ErrorAcumalator } from '../types/common.types';
import {IUser} from '../types/request.types';
import {REGEX,ValidationErrors} from '../utilities/constants.utilities';
export const validateUser = (user : IUser) : string => {
    let errors : ErrorAcumalator = {};
    const {username, password, first_name, last_name, email} = user;
    if (!validateUsername(username)) errors['Invalid username'] = ValidationErrors.INVALID_USERNAME
    if (!validateEmail(email)) errors['Invalid email'] = ValidationErrors.INVALID_EMAIL
    if (!validatePassword(password)) errors['Invalid password'] = ValidationErrors.INVALID_PASSWORD
    const output = JSON.stringify(errors);
    return output;
}

export const validateEmail = (email : string) : boolean =>  {
    if (!REGEX.valid_email.test(email)) return false;
    return true;
}

export const validatePassword = (password : string) : boolean => {
    if (!REGEX.valid_password.test(password)) return false;
    return true;
}

export const validateUsername = (username : string) : boolean => {
    if (!REGEX.valid_username.test(username)) return false;
    return true;
}