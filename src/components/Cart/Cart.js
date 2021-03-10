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

        const badgesBackground = (mark) => {
            if (mark === "LastItems") {
                return {background: "#ffc539"}
            }
            if (mark === "Sale" || mark === "Promotion" || mark === "Bestseller") {
                return {background: "red", color: "white"}
            }
        } 
        
        return(
            <AuthContext.Consumer>
                {
                    ({appState, removeProduct}) => {
                        return(
                            <div className="Cart">   
                            {appState.total === 0 ?
                                <h1 style={{textAlign: "center"}}>Twój koszyk jest pusty</h1> : 
                            <>
                                <div className="cart-nav">
                                    <h1>Cart Checkout</h1>
                                    <button>Submit Order</button>
                                </div>
                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <td className="table-first-column">#</td>
                                            <td className="table-second-column" style={{paddingLeft: "40px"}}>Product</td>
                                            <td className="table-third-column" style={{textAlign: "right"}}>Unit</td>
                                            <td className="table-fourth-column">Quantity</td>
                                            <td className="table-fifth-column">Row Total</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            uniqueProducts.map((product, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td className="table-first-column">{index + 1}.</td>
                                                        <td className="table-second-column">
                                                            <div className="product-image-and-name-container">
                                                                <div><img src={product.thumbnail} alt={product.name}></img></div>
                                                                <div className="name-and-features-container">
                                                                    <div className="product-badges-container">
                                                                        {
                                                                        product.marks !== null ? product.marks.map((mark, index) => {
                                                                            return(
                                                                                mark !== "CrossedPrice" ? <span key={index} style={badgesBackground(mark)}>{mark}</span> : ""
                                                                                )
                                                                            }) : ""
                                                                        }
                                                                        <h4>{product.name}</h4>
                                                                    </div>
                                                                    {
                                                                    product.features.map((feature, index) => {
                                                            return(
                                                                <p key={index}>{feature}</p>
                                                            )
                                                        })}
                                                        </div>
                                                            </div>
                                                        </td>                                                      
                                                        <td className="table-third-column">
                                                            <div>
                                                                <p style={{color: "red"}}>{(product.price).toFixed(2)}</p>
                                                                {
                                                                product.oldPrice !== null ? <p style={{textDecoration: "line-through"}}>{(product.oldPrice).toFixed(2)} PLN</p> : ""
                                            }   
                                                            </div>
                                                            </td>
                                                        <td className="table-fourth-column">x {quantity(product.id)}</td>
                                                        <td className="table-fifth-column">{(quantity(product.id) * product.price).toFixed(2)} PLN</td>
                                                        <td className="table-sixth-column"><button onClick={() => removeProduct(product.id, product.price)}>Usuń</button></td>
                                                    </tr>
                                                )
                                            })
                                        }                              
                                    </tbody>
                                </table>
                                <div className="cart-total">
                                    <p>Total <span>{(this.state.total).toFixed(2)} PLN</span></p>
                                </div>
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