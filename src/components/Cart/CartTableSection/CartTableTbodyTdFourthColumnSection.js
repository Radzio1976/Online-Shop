import React from 'react';
import {AuthContext} from '../../../App';

class CartTableTbodyTdFourthColumnSection extends React.Component {
    render() {   
        const product = this.props.product;   
        return(
            <AuthContext.Consumer>
                {
                    ({inBasketProductsQty}) => {
                        return(
                            <td className="table-fourth-column">x {inBasketProductsQty(product.id)}</td>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableTbodyTdFourthColumnSection;