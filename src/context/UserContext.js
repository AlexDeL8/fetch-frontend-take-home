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
    },
    match: {
        value: null,
        set: () => {}
    }
});

export default UserContext;
