import { Outlet } from "react-router-dom"
import ShoppingIcon from "../../assets/liste.svg"
import "./navigation.styles.scss"
import StyleContainer from "../../components/style-container/style-container.component"
import { useNavigate } from "react-router-dom"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"
import { signOutUser } from "../../utils/firebase/firebase.utils"



const Navigation = () => {
    const { userStatus, setUserStatus } = useContext(UserContext)
    const navigate = useNavigate()

    const signHandler = async() => {
        if (userStatus){
            signOutUser()
            setUserStatus(false)
            navigate("/")
            
        }else{
            const { user } = await signInWithGooglePopup();
            createUserDocumentFromAuth(user)
            
        }
    }


    return (
        <>
            <div className="nav-style-container-width">
                <StyleContainer>
                    <img onClick={() => navigate("/")} height="24" width="24" src={ShoppingIcon}/>
                    <span className="nav-sign-in" onClick={signHandler}>
                        {userStatus? "SignOut" : "SignIn"}
                    </span>
                </StyleContainer>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation