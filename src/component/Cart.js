import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext)

    return (
        <div className="cart-container">
            <div className="cart-details" style={{ marginTop: '100px' }}>
                {shoppingCart.length > 0 ?
                    shoppingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="cart-image"><img src={cart.image} alt="not found" /></span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">Rs{cart.price}.00</span>
                            <span className="inc" onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}><AddIcon /></span>
                            <span className="product-quantity">{cart.qty}</span>
                            <span className="dec" onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}><RemoveIcon /></span>
                            <span className="product-total-price">Rs{cart.price * qty}.00</span>
                            <span className="delete-product" onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}><DeleteIcon /></span>
                        </div>
                    ))
                    : <div class="card">
                        <div class="card-body">
                            
                            <Alert variant="outlined" severity="error" className="mt-1">
                                Empty Cart <h6 class="font-weight-bold">OOps !!sorry your cart is currently empty</h6>
                            </Alert>
                        </div>
                    </div>}
            </div>
            {shoppingCart.length > 0 ?

                <div class="card">
                    <div class="card-body">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Total Items :  {qty}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Total Price</h6>
                                <h6 class="card-subtitle mb-2">Rs{totalPrice}.00</h6>
                                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Check out</button>
                            </div>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h6 class="font-weight-bold">Continue Shopping</h6>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>

                                        </div>
                                        <div class="modal-body">
                                            <Alert variant="outlined" severity="success">
                                                Hey !! success GateWay. Thanks
                                            </Alert>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                : ''}
            <div className="p-2">
                <Link to="/"><button type="button" class="btn btn-outline-secondary">Continue Shopping</button></Link>
            </div>
        </div>
    )
}

export default Cart
