import { createContext } from "react";

// TODO: Might not be needed
const UserContext = createContext({
    userName: ['', () => {}],
    userEmail: ['', () => {}],
    userFavorites: [[], () => {}]
});

export default UserContext;
