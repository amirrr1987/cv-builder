export interface UserModel {
    user: User;
    isLogin: boolean
    login: Login
}
interface User {
    mobile: string;
    _id: string;
}
interface Login {
    error: Error
}
interface Error {
    message: String
}