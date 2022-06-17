export interface IUserDto {
    user_id : string
    password : string,
    first_name : string,
    last_name : string,
    email : string,
    created_at : Date
}

export interface IPostDto {
    post_id : string
    title : string,
    created_at : Date,
};