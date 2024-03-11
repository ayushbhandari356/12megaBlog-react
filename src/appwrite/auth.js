import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{}
// making object authservice so that while importing this AuthSerive we donot have to make any object . No object destructuring .Example we can use directly as authService.client
const authService=new AuthService();

export default authService;