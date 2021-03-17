import React from 'react';
import CartTableProductImageAndNameSection from './CartTableProductImageAndNameSection';

class CartTableTbodyTrSecondColumnnSection extends React.Component {
    render() {   
        const product = this.props.product;  
        return(
            <div className="product-image-and-name-container">
                <CartTableProductImageAndNameSection product={product} />
            </div>                                                                                    
        )
    }
}

export default CartTableTbodyTrSecondColumnnSection;