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
    async updatepost(slug, { title, content, featuredImage, status }){
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
    async deletepost(slug){
        try {
            await this.databases.deleteDocument
            
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error",error);
        }
    }
}

const services = new Services()
export default services