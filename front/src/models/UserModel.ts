export interface UserModel {
    user: User;
    isLogin: boolean
}
interface User {
    mobile: string;
    password: string;
    repassword: string;
}
