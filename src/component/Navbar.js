import React, { Component, useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import {CartContext} from '../Global/CartContext';

const Navbar = () => {
    const {qty} = useContext(CartContext);
    
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5" >
                    <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/4a6e5450263470448935a3838dd71a3a" alt="..." width="90" height="50" data-placement="right" title="ezeehousing" />
                    <a class="navbar-brand font-weight-bolder ml-3" href="#" data-placement="right" title="ezeehousing"><Link to="/" class="text-dark">Ezeehousing</Link></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        </ul>
                        <form class="form-inline my-5 my-lg-0">
                            <a class="navbar-brand font-weight-bolder" data-placement="right" title="Home" href="#"><Link to="/" class="text-dark">Home</Link></a>
                            <a class="navbar-brand font-weight-bolder ml-4" href="#" data-placement="right" title="About Us">About Us </a>
                            <a class="navbar-brand font-weight-bolder ml-4" href="#" data-placement="right" title="Contact Us">Contact Us</a>
                            <Link to="/cart" data-placement="right" title="Go to Cart" class="text-dark"><ShoppingCartIcon data-placement="right"/></Link>
                            <Link to="/cart" data-placement="right" title="Go to Cart" className="text dark"><span className="font-weight-bold rounded-circle bg-danger ml-1 p-1 text-light">{qty}</span></Link>
                        </form>
                    </div>
                </nav>

            </div>
        )
    
}

export default Navbar