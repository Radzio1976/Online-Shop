import React from 'react';
import {AuthContext} from '../../../App';

class CartTableTbodyTdSixthColumnSection extends React.Component {
    render() {   
        const product = this.props.product;   
        return(
            <AuthContext.Consumer>
                {
                    ({removeProduct}) => {
                        return(
                            <td className="table-sixth-column"><button onClick={() => removeProduct(product.id, product.price)}>Remove</button></td>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableTbodyTdSixthColumnSection;