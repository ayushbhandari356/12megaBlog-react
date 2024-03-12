import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    // only giveing account ref
    account
    // making constructor . This is used to give refrence If using firebase we can change this code only ie is constructor only
    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // call another method
                return this.login({email,password})
            } else {
                return userAccount
            }
        } 
        catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }



}
// making object authservice so that while importing this AuthSerive we donot have to make any object . No object destructuring .Example we can use directly as authService.client
// whene ever new is called AuthService  will called

const authService=new AuthService();

export default authService;