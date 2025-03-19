import { createContext } from "react";

export default UserContext = createContext({
    userName: ['', () => {}],
    userEmail: ['', () => {}],
    userFavorites: [[], () => {}]
});
