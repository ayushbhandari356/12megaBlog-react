// this file can be used for future for project for authentication purposes

import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    // only giveing account ref
    account
    // making constructor . This is used to give refrence 
    // If using firebase we can change this code only ie is constructor only and give all the value same email etc
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
                // call another method . DIrectly opening the window of login
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
            console.log("Appwrite service::login?orNot::error",error)
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions( )        
        } catch (error) {
            console.log("Appwrite service::logout::error",error)
        }
    }



}
// making object authservice so that while importing this AuthSerive we donot have to make any object . No object destructuring .Example we can use directly as authService.client
// whene ever new is called AuthService  will called

const authService=new AuthService();

export default authService;