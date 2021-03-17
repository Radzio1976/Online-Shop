import React from 'react';
import {AuthContext} from '../../../App';
import CartTableTbodyTrSecondColumnnSection from './CartTableTbodyTrSecondColumnnSection';
import CartTableTbodyTrThirdColumnnSection from './CartTableTbodyTrThirdColumnnSection';

class CartTableTbodyTrSection extends React.Component {
    render() {   
        const product = this.props.product;
        const index = this.props.index;    
        return(
            <AuthContext.Consumer>
                {
                    ({removeProduct}) => {
                        return(
                            <>
                                <td className="table-first-column">{index + 1}.</td>
                                <td className="table-second-column">
                                    <CartTableTbodyTrSecondColumnnSection product={product} index={index} />
                                </td>                                                      
                                <td className="table-third-column">
                                    <CartTableTbodyTrThirdColumnnSection product={product} />
                                    </td>
                                <td className="table-fourth-column">x {this.props.inBasketProductsQty(product.id)}</td>
                                <td className="table-fifth-column">{(this.props.inBasketProductsQty(product.id) * product.price).toFixed(2)} PLN</td>
                                <td className="table-sixth-column"><button onClick={() => removeProduct(product.id, product.price)}>Remove</button></td>
                            </>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableTbodyTrSection;