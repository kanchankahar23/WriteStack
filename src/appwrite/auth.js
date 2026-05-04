import { use } from "react";
import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);

    }
    async CreateAccount({ email, password, name }) {

        try {
            const useAccount = await this.account.create(ID.unique(), email, password, name)
            if (useAccount) {
                // call another method
                return this.login({ email, password })
            }
            else {
                return useAccount;
            }


        } catch (error) {
            throw error;
        }


    }
    async login({ email, password }) {
        try {
            await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite services::getCurrentUser :: error", error)
        }
        return null;
    }
    async logOut() {
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("AppWrite servics::logout::error",error)
        }
    }
}
const AuthService = new AuthService()
export default AuthService;