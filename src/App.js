import './App.css';
import Productlist from './Components/Productlist';
import Total from './Components/Total';
import { useEffect, useState } from 'react';
import CartList from './Components/CartList';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Topnav from './Components/Topnav';
import Item  from './Components/Item';

function App() {

  // useEffect 

  const [products, setProducts] = useState([
    // {
    //   "id": 1,
    //   "name": "Ruby Slipper",
    //   "url": "https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ActualRubyRubySlippers.jpg",
    //   "price": "$05",
    //   "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    // },
    // {
    //   "id": 2,
    //   "name": "Diamond Watch",
    //   "url": "https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ChocolatePudding.png",
    //   "price": "$109",
    //   "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    // },

    // {
    //   "id": 3,
    //   "name": "Golden Toilet",
    //   "url": "https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/GoldenToilet.jpg",
    //   "price": "$109",
    //   "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    // },
    // {
    //   "id": 4,
    //   "name": "LandYacht",
    //   "url": "https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/LandYachtMotorHome.jpg",
    //   "price": "109",
    //   "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    // },

  ]);
  useEffect(() => {
    fetch(`http://localhost:8082/product/all`)
        .then((response) => response.json())
        .then(result => { 
          setProducts(result) 
          console.log(result)
        });
}, []);
  const[cart,setCart] = useState([]);

  const addToCart =(data) =>{
// console.log(data);
setCart([...cart,data])
}
  
  return (
    <>
     <Topnav></Topnav>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={ <Total cartitem={cart.length}></Total>}>
    <Route path="/item/:id" element={<Item add={products}/>} />
     <Route index element={<Productlist add={products} addToCart={addToCart}/>}/>   
      <Route path='/cart' element={ <CartList add={cart}></CartList>}/>
      {/* <Route index path='/item' element={ <Productlist pro={cart} />}/> */}
      </Route>
    </Routes>
    </BrowserRouter>

     
    </>
  )
};

export default App;
