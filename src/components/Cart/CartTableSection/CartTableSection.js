import React from 'react';
import {AuthContext} from '../../../App';
import CartTableTheadSection from './CartTableTheadSection';
import CartTableTbodySection from './CartTableTbodySection';

class CartTableSection extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({removeProduct, badgesBackground}) => {
                        return(
                            <table className="cart-table">
                                <CartTableTheadSection />
                                <CartTableTbodySection uniqueProductsInBasket={this.props.uniqueProductsInBasket} inBasketProductsQty={this.props.inBasketProductsQty} />
                            </table>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableSection;