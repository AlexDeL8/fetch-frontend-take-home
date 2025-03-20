import { createContext } from "react";

const UserContext = createContext({
    name: {
        value: '', 
        set: () => {}
    },
    email: {
        value: '', 
        set: () => {}
    },
    favorites: {
        value: [], 
        set: () => {}
    }
});

export default UserContext;
