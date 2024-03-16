// we are making these as   as it can generate error if not  
const conf={
    appwriteEndpoint: (import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: (import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: (import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: (import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: (import.meta.env.VITE_BUCKET_ID),
    
}
export default conf

// const conf = {
//     appwriteEndpoint: import.meta.env.VITE_APPWRITE_ENDPOINT.toString(),
//     appwriteProjectId: import.meta.env.VITE_PROJECT_ID.toString(),
//     appwriteDatabaseId: import.meta.env.VITE_DATABASE_ID.toString(),
//     appwriteCollectionId: import.meta.env.VITE_COLLECTION_ID.toString(),
//     appwriteBucketId: import.meta.env.VITE_BUCKET_ID.toString()
// };

// export default conf;

