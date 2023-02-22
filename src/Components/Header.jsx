import { Link, Outlet } from 'react-router-dom';
import './Header.css'
function Header({cartitem}){
    return(
        <>
        <div className="header">
<h1> Demo Shop </h1>
          
            <Link to="/"> Home</Link>
            <Link to="/cart">Cart</Link>
            <p>Cart<sup>{cartitem}</sup></p>
        </div>
        <Outlet/>
        </>
    )
}
export default Header;