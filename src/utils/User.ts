import { createContext } from "react"

export interface User {
    id: string
    username: string
    firstName: string 
    lastName: string
    preferences: {
        locale: "en" | "de"
    }
}

interface UserPreferences {
    locale: "en" | "de"
}

export class User implements User {
    id: string = ""
    username: string = ""
    firstName: string = ""
    lastName: string = ""
    preferences: UserPreferences = {
        locale: "en"
    }

    constructor(id: string, username: string, 
        firstName: string, lastName: string, preferences: UserPreferences) {
            this.firstName = firstName
            this.id = id
            this.lastName = lastName
            this.username = username
            this.preferences = preferences
        }

    updatePreferences = (preferences: UserPreferences) => {
        this.preferences = preferences

    }
}

// user Context
export type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextType>({user: null, setUser: () => {}})
