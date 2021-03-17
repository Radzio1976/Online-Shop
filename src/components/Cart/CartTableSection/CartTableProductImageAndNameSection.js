import React from 'react';
import CartTableProductNameAndFeatures from './CartTableProductNameAndFeatures';

class CartTableProductImageAndNameSection extends React.Component {
    render() {   
        const product = this.props.product;  
        return(
            <>
                <div>
                    <img src={product.thumbnail} alt={product.name}></img>
                </div>
                <div className="name-and-features-container">
                    <CartTableProductNameAndFeatures product={product} />
                </div>  
            </>                                                                                
        )
    }
}

export default CartTableProductImageAndNameSection;