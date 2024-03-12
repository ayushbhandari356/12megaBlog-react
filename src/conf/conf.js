// we are making these as string as it can generate error if not string
const conf={
    appwriteEndpoint:string(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId:string(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId:string(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId:string(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId:string(import.meta.env.VITE_BUCKET_ID),
    
}
export default conf