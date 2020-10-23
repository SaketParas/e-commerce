import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './component/Login';
import Dummy from './component/Dummy';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './component/Products';
import Cart from './component/Cart';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import './App.css';
import CartContextProvider from './Global/CartContext';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider >
          <BrowserRouter>
            <Dummy />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Products" component={Products} />
              <Route path="/Cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
            {/* <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/test" render={props => <Test {...props} />} /> */}
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>

    </div>
  );
}

export default App;