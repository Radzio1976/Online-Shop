import React from 'react';
import {AuthContext} from '../../../App';

class CartTableTbodyTdFifthColumnSection extends React.Component {
    render() {   
        const product = this.props.product; 
        return(
            <AuthContext.Consumer>
                {
                    ({inBasketProductsQty}) => {
                        return(
                            <td className="table-fifth-column">{(inBasketProductsQty(product.id) * product.price).toFixed(2)} PLN</td>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableTbodyTdFifthColumnSection;