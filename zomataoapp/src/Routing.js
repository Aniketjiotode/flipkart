import {React,useEffect,useState} from 'react'
import { BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import mobile from './component/Listing/mobile';
import fashion from './component/Listing/fashion';
import beauty from './component/Listing/beauty';
import ELectronic from './component/Listing/Electronic';
import Details from './component/details/detailspage';
import Placeorder from './component/placeorder/placeorder';
import { CartContext } from './cartcontext';

  const Routing = ()=>{
    const [cart,setCart]=useState({});

    useEffect (() => {
      const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart))
      }, []);


      useEffect(()=>{
        window.localStorage.setItem('cart',JSON.stringify(cart))
      },[cart])
    return(
        <BrowserRouter>
        <div>
            <CartContext.Provider value={{cart,setCart}}>
            <Header/>
             <Route exact path='/' component={Home}/>
             <Route exact path='/mobile' component={mobile}/>
             <Route exact path='/fashion' component={fashion}/>
             <Route exact path='/beauty' component={beauty}/>
             <Route exact path='/Electronic' component={ELectronic}/>
             <Route exact path='/details' component={Details}/>
             <Route exact path='/placeorder' component={Placeorder}/>
            <Footer/>
            </CartContext.Provider>
        </div>
        </BrowserRouter>
    )
  }

   export default Routing;