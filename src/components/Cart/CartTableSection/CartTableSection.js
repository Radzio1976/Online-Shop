import React from 'react';
import {AuthContext} from '../../../App';

class CartTableSection extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({removeProduct, badgesBackground}) => {
                        return(
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
                                        this.props.uniqueProductsInBasket.map((product, index) => {
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
                                                    <td className="table-fourth-column">x {this.props.quantity(product.id)}</td>
                                                    <td className="table-fifth-column">{(this.props.quantity(product.id) * product.price).toFixed(2)} PLN</td>
                                                    <td className="table-sixth-column"><button onClick={() => removeProduct(product.id, product.price)}>Remove</button></td>
                                                </tr>
                                            )
                                        })
                                    }                              
                                </tbody>
                            </table>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableSection;