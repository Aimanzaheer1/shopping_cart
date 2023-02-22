import './Productlist.css'

function Productlist({pro,addToCart}){
    return(
        <div className='products'> 
{
    pro.map((x,i)=>{
        return(
        <div className='Cart' key={i}>
 <div className='image-box'>
 <img className='image1' src={x.url} />
 </div>
 <div className='about'>
 <h1 classNamet='title'>{x.name}</h1>
    <p className='details'>{x.details}</p>
 
 <p className='subtitle'>{x.price}</p>
 <button className='button' onClick={()=> addToCart(x)}>Add to cart</button>
 </div>
 </div>)
    })
}
 </div>
 )
    
}
export default Productlist;