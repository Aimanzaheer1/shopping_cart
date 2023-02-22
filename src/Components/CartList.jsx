import './CartList.css'

function CartList({ pro }) {
    return (
        <table className='table'>
            <thead className='thead'>
                <tr className='top'>
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
                pro.map((x, i) => {
                    return (
                        <tr key={i}>
                            <td className='list'>{i+1}</td>
                            <td className='list'>
                                <img className='cartimage' src={x.url} />
                            </td>
                            <td className='list'>
                                <h1 className='title'>{x.name}</h1>
                            </td>
                            <td className='list'>
                                <p className='details'>{x.details}</p>
                            </td>
                            <td className='list'>
                                <p className='price'>{x.price}</p>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
    )
}
export default CartList;