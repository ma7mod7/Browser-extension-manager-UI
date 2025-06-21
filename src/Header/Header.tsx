import Logo from "../assets/logo.svg";
import Sun from "../assets//icon-sun.svg"
import Moon from '../assets/icon-moon copy.svg'
import './index.css'

interface IProp{
    theme:string,
    toggleTheme:()=>void
}
const Header = ({theme,toggleTheme}:IProp) => {

        return (
            <>
                <div className="Header-style">
                    <img src={Logo} className="Logo" />
                    <button onClick={toggleTheme} className="mode">
                        {theme=='dark'?<img src={Sun} />:<img src={Moon} />}

                    </button>
                </div>
            </>
        )
}

    export default Header