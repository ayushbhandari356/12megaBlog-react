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
                // here we are using slug but we can use ID.unique()
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // here we are using slug but we can use ID.unique(). Here slug is the id of the post so we can directly access it 
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service::updatePost::error",error)

        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            // we are returning true so it is upto frontend how it handles the true
            return true
        }
         catch (error) {
            console.log("Appwrite service::deletePost::error",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service::deletePost::error",error)
            return false
        }
    }

    // Now to access all the post we use listdocument but it consist of all post which consisit of post whose atatus is inactive but we dont want it so we use query
    // here default value is given in array but we can use mutiple here only 1 query is given
    async getPosts(queries=[Query.equal("status", "equal")]){
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // instead of default quries we can make queries here with multiple queries
                queries,
                
                
            )
        } catch (error) {
            console.log("Appwrite service::getPosts::error",error)
            return false
        }
    }

                    //  FILE UPLOAD SERVICES-these used in another file

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service::uploadFile::error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service::deleteFile::error",error)
            return false
        }
    }
// here are making method not function
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}

// service is an object is made because we can directly use properties '
// whenever new is created always constructor is called

// making new instances from new Service
const service = new Service()
export default service