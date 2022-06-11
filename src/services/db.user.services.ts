import db from '../utilities/db.utilities';
import {IUserDb} from '../types/db.types';
import {IUserDto} from '../types/dto.types';
import { DbException } from '../exceptions/db.exception';
export const createUser = async (user : IUserDb) : Promise<IUserDto> => {
    try {
        let params = Object.keys(user).map((key) => user[key])
        const sql_query = `INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`
        const result = (await db.query(sql_query,[...params])).rows[0] as IUserDto;
        return result;
    } catch (err) {
        throw new DbException("Database error occured",500);
    }
}

export const getUser = async (email : string) : Promise<IUserDto> => {
    try {
        let param = [email];
        const sql_query = `SELECT * FROM users WHERE email = $1`;
        const result = (await db.query(sql_query,param)).rows[0] as IUserDto;
        return result;
    } catch (err) {
        throw new DbException("Database error occured",500);
    }
}