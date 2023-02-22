import './App.css';
import Productlist from './Components/Productlist';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { useState } from 'react';
import CartList from './Components/CartList';

function App() {

  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Ruby Slipper",
      "url": "https://images.squarespace-cdn.com/content/v1/5c6545f67046803f1f8c704e/1580343145357-D5XVK2YS2KJBYKPURBFM/IKO1703--Wizard-of-Oz-Ruby-Slippers-in-case-V2-SHOES-1.png",
      "price": "$05",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
      "id": 2,
      "name": "Diamond Watch",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnjT1P94x84OvbVXZaAFxNdflUUFGiVrikUBHoNc&s",
      "price": "$109",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },

    {
      "id": 3,
      "name": "Golden Toilet",
      "url": "https://royaltoiletry.com/wp-content/uploads/2021/01/angular-plain-gold-toilet-8-350x350.jpg",
      "price": "$109",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
      "id": 4,
      "name": "LandYacht",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlx5m4xyWHly7-e4KwqbSFmu5LS4RnCa_nA&usqp=CAU",
      "price": "109",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },

  ]);
const addToCart =(data) =>{
// console.log(data);
setCart([...cart,data])
}
  const[cart,setCart] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Header cartitem={cart.length}></Header>
   
      <Productlist pro={products} addToCart={addToCart}></Productlist>
   <CartList pro={cart}></CartList>
    </>
  )
};

export default App;
