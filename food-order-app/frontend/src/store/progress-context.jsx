import { createContext, useState } from "react";



const UserProgressContext = createContext({
    progress : '',
    handleShowCart : () => {},
    handleHideCart : () => {},
    handleShowCheckOut : () => {},
    handleHideCheckOut : () => {},
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');
    
    function handleShowCart(){
        setUserProgress('cart')
    }

    function handleHideCart(){
        setUserProgress('')
    }

    function handleShowCheckOut(){
        setUserProgress('checkout')
    }

    function handleHideCheckOut(){
        setUserProgress('')
    }

    const userProgressContext = {
        progress : userProgress,
        handleShowCart,
        handleHideCart,
        handleShowCheckOut,
        handleHideCheckOut
    }

    return (
        <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext;