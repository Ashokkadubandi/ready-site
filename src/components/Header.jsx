import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import './styles/header.css'

const Header = () => {
    const [navbar,setNavbar] = useState(false)
    return (
    <div className="header-section">
        <header>
            <img src="https://static.readdy.ai/image/56a5d8212b13d1ce045b44e5c0818b7e/7fa7a51b8d714edcb471a319ad6e4ff5.png"/>
            <div className="navbar-routes">
                <a>Home</a>
                <a>Find jobs</a>
                <a>Companies</a>
                <a>Find candidates</a>
                <a>Dashboard</a>
                <a>Sign in</a>
                <a className="post">Post Job</a>
            </div>
            <div className="mobile-nav">
                <button onClick={() => setNavbar(!navbar)}>
                    <IoMenu/>
                </button>
            </div>
        </header>
        {navbar && 
        <div className="mobile-nav-links">
                <a>Home</a>
                <a>Find jobs</a>
                <a>Companies</a>
                <a>Find candidates</a>
                <a>Dashboard</a>
                <a>Sign in</a>
                <a className="mob-post">Post</a>
        </div>}
    </div>
    )
}

export default Header