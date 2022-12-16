import './App.css'
import Header from './Components/Heder'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product_new from './Components/Product_new';
import Data from './Components/Data';
import Dresses_Data from './Components/Dresses_Data';
import Product_card from './Components/Product_card';
import Cart_page from './Components/Cart_page';
import Body from './Components/Body';
import { useState } from 'react';

let count=0;
function App() {
  const [header,setheader]=useState(count)
  const [cart,setcart]=useState([])

  function Product_view(props) {
    console.log(props)
    setheader((oldvalue)=>{
      return oldvalue+1;
    })

    setcart((oldvalue)=>{
      return [...oldvalue,props]
    })
    count=count+1;
  }

  const Mobile = Data.map((mobile, i) => {
    return <Product_card key={i} name={mobile.name} price={mobile.price} url={mobile.url} id={mobile.id} spec={mobile.spec} productname={mobile.productname}/>
  })

  const Dress = Dresses_Data.map((Dress, i) => {
    return <Product_card key={i} name={Dress.name} price={Dress.price} url={Dress.url} id={Dress.id} productname={Dress.productname}/>
  })
  const mobile=<Body data={Mobile} data1={Dress}/>
  return (
    <>
    <Router>
      <div className='pb-24 lg:pb-20'>
      <Header num={header}/>
      </div>
      <Routes>
        <Route path='/product_new' element={<Product_new Product_view={Product_view}/>}></Route>
        <Route path='/cart_page' element={<Cart_page values={cart}/>}></Route>
        <Route exact path='/simple-react-ecommerce' element={mobile}></Route>
      </Routes>
    </Router >
    </>
  );
}

export default App;
