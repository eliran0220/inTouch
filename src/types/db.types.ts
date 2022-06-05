export interface IUserDb {
    user_id : string
    username : string,
    password : string,
    first_name : string,
    last_name : string,
    email : string,
    created_at : Date
}

export interface IPostDb {
    post_id : string
    title : string,
    created_at : Date,
};