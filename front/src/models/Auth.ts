export interface AuthModel {
    user: User;
}
interface User {
    mobile: string;
    password: string;
    repassword: string;
}
