import React from 'react';
import {AuthContext} from '../../../App';
import CartTableTbodyTrSection from './CartTableTbodyTrSection';

class CartTableTbodySection extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({uniqueProductsInBasket}) => {
                        return(
                            <tbody>
                            {
                                    uniqueProductsInBasket().map((product, index) => {
                                        return(
                                            <tr key={index}>
                                                <CartTableTbodyTrSection product={product} index={index} />
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