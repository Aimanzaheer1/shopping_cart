import { Link, Outlet } from 'react-router-dom';
import './Total.css'
function Total({ cartitem }) {
    return (
        <>
            <div className="header">


                <Link to="/" className='shop'><h1 > Shopping Cart </h1></Link>
                <br />
                <br />
                <Link to="/cart" className='addca'>Total Item</Link>
                <p className='cartnum'><sup className='sup'>{cartitem}</sup></p>

            </div>
            <Outlet />
        </>
    )
}
export default Total;