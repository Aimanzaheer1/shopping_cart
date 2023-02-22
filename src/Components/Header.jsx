import './Header.css'
function Header({cartitem}){
    return(
        <div className="header">

            <h1>Demo shop</h1>
            <p>Cart<sup>{cartitem}</sup></p>
        </div>
    )
}
export default Header;