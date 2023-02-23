import { Link } from 'react-router-dom';
import './Productlist.css'



function Productlist({ inam, addToCart }) {
    return (
        <div className='products'>
            {
                inam.map((add, i) => {
                    return (
                        <div className='Cart' key={i}>
                            <div className='image-box'>
                                <img className='image1' src={add.url} />
                            </div>
                            <div className='about'>
                                <Link to={`/item/${add.id}`} className='titlelink'>
                                <h1 className='title'>{add.name}</h1>
                                </Link>
                                <p className='details'>{add.details}</p>
                                <p className='subtitle'>{add.price}</p>
                                <button className='button' onClick={() => addToCart(add)}>Add to cart</button>
                                
                            </div>
                        </div>)
                })
            }
        </div>
    )

}
export default Productlist;