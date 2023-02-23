import './Item.css'
import { Link, useParams } from "react-router-dom";
import Quantity from './Quantity';
function Item({ inam }) {
    const {id} = useParams();
    return (
        <table className='table'>

            {
               inam && inam.map((inam) => {
                if(inam.id == id){
                    return (

                        <section className='table1'>
                            <div className='list'>
                                <img className='cartimage' src={inam.url} /> 
                            </div>
                            <div className='list'>
                                <Link to='/cart' className='title'>
                                    <h1>{inam.name}</h1>
                                </Link>
                            </div>
                            <div className='list'>
                                <p className='details'>{inam.details}</p>
                            </div>
                            <div className='list'>
                                <p className='price'>{inam.price}</p>
                            </div>
                            <Quantity></Quantity>  
                        </section>
                    )    
                }
                    
                })
            }

        </table>
    )
}
export default Item;