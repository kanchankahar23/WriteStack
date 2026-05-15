import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Services {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }
    async createpost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {

            console.log("Appwrite service :: createPost :: error", error)
        }
    }
    async updatepost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("AppWrite service :: updatepost :: error", error)
        }
    }
    async deletepost(slug) {
        try {
           return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                    conf.appwriteCollectionID,
                    slug
           )

        } catch (error) {
            console.log("Appwrite service :: updatepost :: error", error);
            return false

        }
    }
    async getpost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )

        } catch (error) {
            console.log(error)
            return false
        }
    }
 async getPosts(queries = [Query.equal("status", "active")]) {
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            queries,   // ✅ lowercase, matches parameter
        )
    } catch (error) {
        console.log("Appwrite service :: getPosts :: error", error)
        return false
    }
}

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritesBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite servise :: uploadfile :: error", error);
            return false
        }
    }
     async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwritesBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite servise :: uploadfile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritesBucketID,
            fileId
        )
    }

}

const services = new Services()
export default services