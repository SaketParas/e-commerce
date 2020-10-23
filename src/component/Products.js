import React, { useContext } from 'react';
import { ProductsContext } from '../Global/ProductsContext';
import Banner from './Banner';
import {CartContext} from '../Global/CartContext';
import Dummy from './Dummy';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



const Products = (props) => {
    const { products } = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    
    let { isAuth } = props

        return !isAuth ?
            (
                <Redirect to='/login' />
            ) :
            (
        <div className="container">
            <Dummy />
            <Banner />
            <div className="products">
                {products.map((product) => {
                    return (
                        <div className="product" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt="image" width="300" height="200" />
                            </div>
                            <div className="product-details bg-light">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    <small class="text-muted">Rs.</small>{product.price}.00
                            </div>
                            </div>

                            <div className="text-center bg-light">
                                <button type="button" class="btn btn-outline-danger mt-1 text-center" onClick={() => dispatch({type: 'ADD_TO_CART', id:product.id, product: product})}>Add to cart</button>
                            </div>
                            {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                            {product.status === 'new' ? <div className="new">New</div> : ''}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(Products)
