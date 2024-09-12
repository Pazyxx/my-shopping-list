import { Outlet } from "react-router-dom"
import ShoppingIcon from "../../assets/liste.svg"
import "./navigation.styles.scss"
import StyleContainer from "../../components/style-container/style-container.component"
import { useNavigate } from "react-router-dom"




const Navigation = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="nav-style-container-width">
                <StyleContainer>
                    <img onClick={() => navigate("/")} height="24" width="24" src={ShoppingIcon}/>
                    <span className="nav-sign-in">
                        SignIn
                    </span>
                </StyleContainer>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation