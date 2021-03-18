import React from 'react';
import CartTableTbodyTrSecondColumnnSection from './CartTableTbodyTrSecondColumnnSection';

class CartTableTbodyTdSecondColumnSection extends React.Component {
    render() {   
        const product = this.props.product;
        const index = this.props.index;    
        return(
            <td className="table-second-column">
                <CartTableTbodyTrSecondColumnnSection product={product} index={index} />
            </td>                                                      
        )
    }
}

export default CartTableTbodyTdSecondColumnSection;