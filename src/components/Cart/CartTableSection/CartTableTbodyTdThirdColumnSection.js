import React from 'react';
import CartTableTbodyTrThirdColumnnSection from './CartTableTbodyTrThirdColumnnSection';

class CartTableTbodyTdThirdColumnSection extends React.Component {
    render() {   
        const product = this.props.product;   
        return(                                                    
            <td className="table-third-column">
                <CartTableTbodyTrThirdColumnnSection product={product} />
            </td>
        )
    }
}

export default CartTableTbodyTdThirdColumnSection;