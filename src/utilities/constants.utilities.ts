import { GeneralException } from "../exceptions/general.exceptions";

export const REGEX = {
    "valid_password" : new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"),
    "valid_email" : new RegExp("^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
};

export enum VALDIATION_ERRORS {
    INVALID_PASSWORD = 'The minimum is 8 characters which consist at least 1 letter, 1 number, 1 special character and 1 capital letter',
    INVALID_EMAIL = 'Please enter an email with the format : example@somemail.domain',
    INVALID_USERNAME_EMPTY = 'Please enter a username of characters',
    INVALID_PASSWORD_EMPTY = 'Please enter a password of characters',
    INVALID_EMAIL_EMPTY = 'Please enter a email of characters',
    INVALID_FIRSTNAME_EMPTY = 'Please enter a firstname of characters',
    INVALID_LASTNAME_EMPTY = 'Please enter a lastname of characters',
    PASSWORD_DOESNT_MATCH = "Password is incorrect for "
}


export enum BAD_REQUEST_ERRORS {
    USER_N0T_FOUND = " was not found",
    USER_FOUND = " with this email already exists",
    GENERAL_ERROR = "General error occured",
    TOKEN_ERROR = "Cannot create jwt token"
}

export enum STATUS_CODES {
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    DATABSE_ERROR = 500,
    VALID_REQUEST = 200,
    GENERAL_ERROR = 500
}

export const MANDATORY_FIELDS = ["email","password"];

export const GEN_SALT = 10;

