import logo from './logo.svg';
import './App.css';
import Productlist from './Components/Productlist';
import Navbar from './Components/Navbar';

function App() {

  // const [products, setProducts] = useState([
  //   {
  //     "id": 1,
  //     "name": "Ruby Slipper",
  //     "url":"https://images.squarespace-cdn.com/content/v1/5c6545f67046803f1f8c704e/1580343145357-D5XVK2YS2KJBYKPURBFM/IKO1703--Wizard-of-Oz-Ruby-Slippers-in-case-V2-SHOES-1.png",
  //     "price": 105,
  //     "details": "lorem"

  //   },
  //   {
  //     "id": 2,
  //     "name": "Diamond Watch",
  //     "url":"https://images.squarespace-cdn.com/content/v1/5c6545f67046803f1f8c704e/1580343145357-D5XVK2YS2KJBYKPURBFM/IKO1703--Wizard-of-Oz-Ruby-Slippers-in-case-V2-SHOES-1.png",
  //     "price": 109,
  //     "details": "lorem"

  //   },

  //   {
  //     "id": 3,
  //     "name": "Golden Toilet",
  //     "url":"https://images.squarespace-cdn.com/content/v1/5c6545f67046803f1f8c704e/1580343145357-D5XVK2YS2KJBYKPURBFM/IKO1703--Wizard-of-Oz-Ruby-Slippers-in-case-V2-SHOES-1.png",
  //     "price": 109,
  //     "details": "lorem"

  //   },
  //   {
  //     "id": 4,
  //     "name": "LandYacht",
  //     "url":"https://cdn.shopify.com/s/files/1/0546/4896/3257/products/120CP-FRDC40FX-Drop_Carve_40_Fox_Complete--Boards-Face-Web_0f1e4910-2179-4656-833e-d054cabed96e_1200x1200.jpg?v=1614546122",
  //     "price": 109,
  //     "details": "lorem"

  //   },

  // ])
  return (
    <>
      <Navbar></Navbar>
      <Productlist></Productlist>
    </>
  )
};

export default App;
