import React from 'react';
import {AuthContext} from '../../App';

class Cart extends React.Component {
        state = {
            basket: [],
            total: 0
        }



    componentDidMount() {
        this.setState({
            basket: JSON.parse(localStorage.getItem("addedProducts")),
            total: JSON.parse(localStorage.getItem("total"))
        })
        
    }

    render() {
        let basket = this.state.basket

        console.log(basket)

            const uniqueProducts = Array.from(new Set(basket.map(product => product.id)))
            .map(id => {
              return basket.find(product => product.id === id)
            })

        const quantity = (productId) => {

            let qty = 0;
            for (let i=0; i<basket.length; i++) {
                if (basket[i].id === productId) {
                  qty += 1
                }
            }
            return qty
        }
        
        return(
            <AuthContext.Consumer>
                {
                    ({appState, removeProduct}) => {
                        return(
                            <div className="Cart">   
                            {appState.total === 0 ?
                            <h1>Twój koszyk jest pusty</h1> : 
                            <>
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
                                            uniqueProducts.map((product, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td><img src={product.thumbnail} alt=""></img></td>
                                                        <td><h4>{product.name}</h4>{product.features.map((feature, index) => {
                                                            return(
                                                                <p key={index}>{feature}</p>
                                                            )
                                                        })}</td>
                                                        <td>{(product.price).toFixed(2)}</td>
                                                        <td>x {quantity(product.id)}</td>
                                                        <td>{(quantity(product.id) * product.price).toFixed(2)} PLN</td>
                                                        <td><button onClick={() => removeProduct(product.id, product.price)}>Usuń</button></td>
                                                    </tr>
                                                )
                                            })
                                        }   
                                        <td>Total {this.state.total}</td>                            
                                    </tbody>
                                </table>
                                </>
                            }                            
                                
                            </div>
                        )
                    }
                }
            </AuthContext.Consumer>

                            


        )
    }
}

export default Cart;