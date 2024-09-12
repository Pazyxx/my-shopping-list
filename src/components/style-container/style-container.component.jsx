import "./style-container.styles.scss"

const StyleContainer = ({children}) => {
    return(
        <div className="wrapper">
            <div className="items">
                <div className="item">
                    <div className="inner">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default StyleContainer