import React from 'react';
import CartTableTbodyTrSection from './CartTableTbodyTrSection';

class CartTableTbodySection extends React.Component {
    render() {       
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

export default CartTableTbodySection;