export interface User {
    id: string;
    username:string;
    avatar?:string;
}

export interface UserSchema {
    authdata? : User;
    _inited:boolean;
}
