import { Link } from 'react-router-dom';
import './Productlist.css'



function Productlist({ add, addToCart }) {
    return (
        <div className='products'>
            {
                add.map((add, i) => {
                    return (
                        <div className='Cart' key={i}>
                            <div className='image-box'>
                                <img className='image1' src={add.image} />
                            </div>
                           
                                <Link to={`/item/${add.id}`} className='titlelink'>
                                <h1 className='title'>{add.name}</h1>
                                </Link>
                                <p className='details'>{add.shortDiscription}</p>
                                <p className='subtitle'>{add.price}</p>
                                <button className='button' onClick={() => addToCart(add)}>Add to cart</button>
                                
                            </div>
                        )
                })
            }
        </div>
    )

}
export default Productlist;