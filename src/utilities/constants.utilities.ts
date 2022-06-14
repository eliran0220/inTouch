export const REGEX = {
    "valid_username" : new RegExp("/^\\w+$/;"),
    "valid_password" : new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"),
    "valid_email" : new RegExp("^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
};

export enum ValidationErrors {
    INVALID_USERNAME = 'Only letters, numbers and underscore characters are allowed.',
    INVALID_PASSWORD = 'The minimum is 8 characters which consist at least 1 letter, 1 number, 1 special character and 1 capital letter',
    INVALID_EMAIL = 'Please enter an email with the format : example@somemail.domain'
}


export enum RuntimeErrors {
    USER_N0T_FOUND = "User was not found!, "
}

export const ResouceNotFoundMapper = (invalid_param : string, validation_error : string) => {
    return `${invalid_param} has not not been found! ${ValidationErrors[validation_error]};`
}

export enum StatusCodes {
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    DATABSE_ERROR = 500,
    VALID_REQUEST = 200,
    GENERAL_ERROR = 500
}

export const GEN_SALT = 10;