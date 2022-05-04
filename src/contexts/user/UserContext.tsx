import React, { useState} from 'react'; 
import axios from 'axios';

export interface User {
    id: string;
    email: string;
    password: string;
    characterList: Character[];
  }
  
export interface Character {
    id: string,
    name: string,
    spellList: string[], //Ska kanske bytas till spell interface från apiContext?
  }

export interface UserContextInterface {
      user: User | null;
      token: string | null;
      login: (email: string, password: string) => Promise<void>;
      logout: () => void; //Lägg till ytterligare funktioner på user
}

export const UserContext = React.createContext<UserContextInterface | null>(
    null
);

const UserContextProvider: React.FC = (props) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const login = async (email: string, password: string) => {
        console.log("IN USERCONTEXT LOGIN")
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password
            });
            console.log(response.data.user);
            
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        setUser(null);
        setToken(null);
    }

    const userContext: UserContextInterface = {user, login, logout, token};

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;




