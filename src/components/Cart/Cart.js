import React from 'react';
import {AuthContext} from '../../App';

class Cart extends React.Component {
    state = {
        basket: null
    }
    
    render() {
        console.log(this.props.appState.basket)
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {

                        return(
                            <div className="Cart">
                            <div className="cart-nav">
                                <h1>Cart Checkout</h1>
                                <button>Submit Order</button>
                            </div>
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>Product</td>
                                        <td>Unit</td>
                                        <td>Quantity</td>
                                        <td>Row Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        this.props.appState.basket.map((product, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td><img src={product.thumbnail} alt=""></img></td>
                                                    <td>{product.price}</td>
                                                    <td>{3}</td>
                                                    <td>{1000}</td>
                                                </tr>
                                            )
                                        })
                                    }                               
                                </tbody>
                            </table>
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>

        )
    }
}

export default Cart;