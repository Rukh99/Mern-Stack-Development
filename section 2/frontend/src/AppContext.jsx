import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();


export const AppProvider = ({ children }) => {

    const Navigate =useNavigate();     


    const [currentUser ,setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )

    const [LoggedIn, setLoggedIn] = useState(currentUser!==null);



    const Logout = () => {
        setLoggedIn(false);
        sessionStorage.removeItem('user');
        Navigate('/login');






    }

    return <AppContext.Provider value={{ LoggedIn, setLoggedIn, Logout }}>
        {children}
    </AppContext.Provider>


}

const useAppContext = () => { return useContext(AppContext) }  // usecontext- hook 

export default useAppContext;
