export interface AuthModel {
    user: User;
    isLogin: boolean
}
interface User {
    mobile: string;
    password: string;
    repassword: string;
}
