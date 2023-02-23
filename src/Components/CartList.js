import './CartList.css'


function CartList({ inam }) {
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
                inam.map((ecart, i) => {
                    return (
                        <tr key={i} className='top2' >
                            <td className='list'>{i+1}</td>
                            <td className='list'>
                                <img className='cartimage' src={ecart.url} />
                            </td>
                            <td className='list'>
                                <h1 className='titlename'>{ecart.name}</h1>
                            </td>
                            <td className='list'>
                                <p className='details'>{ecart.details}</p>
                            </td>
                            <td className='list'>
                                <p className='price'>{ecart.price}</p>
                            </td> 
                           

                        </tr>
                    )
                })
            }

        </table>
            
    )
}
export default CartList;