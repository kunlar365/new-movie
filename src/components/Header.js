import { Link } from "react-router-dom";

const Header = () => {
    return(
    <header className="header">
        {/* <a href="#" className="logo">Logo</a> */}
        <Link className="header-logo" to="/">
            {/* <img className="public/logo512.png"/> */}
            Logo
        </Link>
        <div className="header-links">
        <Link className="header-links" to="/catalog">Catalog</Link>
        <Link className="header-links" to="/search">Search</Link>
        </div>
    </header>
    )
};

export default Header;