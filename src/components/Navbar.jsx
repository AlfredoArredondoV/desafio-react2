import { NavLink } from "react-router-dom";

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active text-white ms-3" : "text-white ms-3");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
            <NavLink className={ setActiveClass } to="/">
                Home
            </NavLink>
            {"-"}
            <NavLink className={ setActiveClass } to="/Pokemones">
                Pokemones
            </NavLink>
            </ul>
        </div>
        </nav>

    )
}