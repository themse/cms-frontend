import React, { createContext, ReactNode, useState } from 'react';

export const CurrentUserContext = createContext([]);

export const CurrentUserProvider = ({ children }: { children: any }) => {
    const [state, setState] = useState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null,
    });

    return null;
    // return (
    //     <CurrentUserContext.Provider value={[value, setValue]}>
    //         {children}
    //     </CurrentUserContext.Provider>
    // );
};

/*
<CurrentUserProvider>
    <App />
</CurrentUserProvider>
*/
