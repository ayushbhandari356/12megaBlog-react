import conf from "../conf/conf";
import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    // Here bucket is storage
    bucket;
    // constructor called. How can we say that ? Because we use () after it so it directly called the constructor
    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
            try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log("Appwrite service::logout::error",error)
        }
    }
}

// service is an object is made because we can directly use properties '
// whenever new is created always constructor is called
const service = new Service()
export default service