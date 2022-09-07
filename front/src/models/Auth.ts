export interface AuthModel {
    user: User;
}
interface User {
    email: string;
    password: string;
    repassword: string;
}
