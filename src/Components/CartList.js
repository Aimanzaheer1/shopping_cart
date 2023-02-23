import './CartList.css'
import { Link } from 'react-router-dom';


function CartList({ add }) {
    return (
        <table className='table2'>
            <thead className='thead2'>
                <tr  >
                    <th>
                        S.No
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Detail
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            
            </thead>
            {
                add.map((add, i) => {
                    return (
                        <tr key={i} className='top2' >
                            <td className='list'>{i+1}</td>
                            <td className='list'>
                                <img className='cartimage' src={add.image} />
                            </td>
                            <td className='list'>
                                <h1 className='titlename'>{add.name}</h1>
                            </td>
                            <td className='list'>
                                <p className='details'>{add.shortDiscription}</p>
                            </td>
                            <td className='list'>
                                <p className='price'>{add.price}</p>
                            </td> 
                        </tr>
                    )
                })
            }
            <button className='return'>
            <Link to="/" className='ret' >
                Return
                </Link>
                </button>
                
            
        </table>
            
    )
    
}

export default CartList;