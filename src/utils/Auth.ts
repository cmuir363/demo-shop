import { User } from "./User"

// to be implemented properly later
class Auth {

    static checkForValidUser = (): User | null => {
        const user = this.getUser()
        const token = this.getToken()
        if (this.userMatchesToken(user, token)) {
            return user
        } else {
            return null
        }
    }

    private static userMatchesToken = (user: User | null, token: string | null) => {
        if (user && token) {
            return true
        } else {
            return false
        }
    }

    static saveUser = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user))
    }

    static getUser = (): User | null => {
        const user = localStorage.getItem("user")
        if (user) {
            return JSON.parse(user)
        } else {
            return null
        }
    }

    private static saveToken = (token: string) => {
        localStorage.setItem("token", token)
    }

    static getToken = (): string | null => {
        return localStorage.getItem("token")
    }

    private static checkForValidToken = (): string | null => {
        const token = Auth.getToken();
        if (this.isTokenValid(token)) {
            return token
        } else {
            return null
        }
    }

    // to be implemented
    private static isTokenValid = (token: string | null) :boolean => {
        if (token) {
            return true;
        } else {
            return false
        }
    }

    // to be implemented
    static logIn = (username: string, pass: string): {token: string | null, user: User | null, isSuccesful: boolean} => {
        if (username && pass) {
            const user: User = new User("1", "cmuir363", "Calum",  "Muir", {locale: "en"})
            const token = `${username}${pass}`
            Auth.saveUser(user)
            Auth.saveToken(token)
            return {token: `${username}${pass}`, user: user, isSuccesful: true}
        } else {
            return {token: null, isSuccesful: false, user: null}
        }
    }

    static logOut = () => {
        localStorage.clear()
    }

}

export default Auth