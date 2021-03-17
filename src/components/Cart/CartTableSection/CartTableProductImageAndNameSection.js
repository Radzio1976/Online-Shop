import React from 'react';
import {AuthContext} from '../../../App';
import CartTableProductNameAndFeatures from './CartTableProductNameAndFeatures';

class CartTableProductImageAndNameSection extends React.Component {
    render() {   
        const product = this.props.product;  
        return(
            <AuthContext.Consumer>
                {
                    ({badgesBackground}) => {
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
            </AuthContext.Consumer>
        )
    }
}

export default CartTableProductImageAndNameSection;