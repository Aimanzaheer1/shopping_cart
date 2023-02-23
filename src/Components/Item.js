import './Item.css'
import { Link, useParams } from "react-router-dom";
import Quantity from './Quantity';
function Item({ add }) {
    const {id} = useParams();
   
    return (
        <table className='table'>

            {
               add && add.map((add) => {
                if(add.id == id){
                    return (

                        <section className='table1'>
                            <div className='list'>
                                <img className='cartimage' src={add.image} /> 
                            </div>
                            <div className='list'>
                                <Link to='/cart' className='title'>
                                    <h1>{add.name}</h1>
                                </Link>
                            </div>
                            <div className='list'>
                                <p className='details'>{add.longDiscription}</p>
                            </div>
                            <div className='list'>
                                <p className='price'>{add.price}</p>
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