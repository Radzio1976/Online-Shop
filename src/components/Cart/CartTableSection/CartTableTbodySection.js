import React from 'react';
import {AuthContext} from '../../../App';
import CartTableTbodyTrSection from './CartTableTbodyTrSection';

class CartTableTbodySection extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({removeProduct, badgesBackground}) => {
                        return(
                            <tbody>
                            {
                                    this.props.uniqueProductsInBasket.map((product, index) => {
                                        return(
                                            <tr key={index}>
                                                <CartTableTbodyTrSection product={product} index={index} uniqueProductsInBasket={this.props.uniqueProductsInBasket} inBasketProductsQty={this.props.inBasketProductsQty}/>
                                            </tr>
                                        )
                                    })
                                }                              
                            </tbody>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableTbodySection;