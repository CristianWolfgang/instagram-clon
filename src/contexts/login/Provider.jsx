import { useState } from "react";
import LoginContext from "./context";

const LoginProvider =({children})=>{
    const [loginError,setloginError] = useState(false);

    return(<LoginContext.Provider value={{
        loginError,
        setloginError
    }}>
        {children}
    </LoginContext.Provider>);
};
export default LoginProvider;