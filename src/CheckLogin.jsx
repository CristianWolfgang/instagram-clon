import Cookies from "js-cookie"
import Feed from "./Feed";
import Login from "./Login";

const CheckLogin = ()=>{
    const logged = Cookies.get("logged");
    return(
        <>
            {
                logged ? <Feed/> : <Login/> 
            }
        </>
        
    );
};
export default CheckLogin;