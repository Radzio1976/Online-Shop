import React from 'react';
import {AuthContext} from '../../../App';

class CartTableProductNameAndFeatures extends React.Component {
    render() {   
        const product = this.props.product;  
        return(
            <AuthContext.Consumer>
                {
                    ({badgesBackground}) => {
                        return(
                            <>
                                <div className="product-badges-container">
                                    {
                                    product.marks !== null ? product.marks.map((mark, index) => {
                                        return(
                                            mark !== "CrossedPrice" ? <span key={index} style={badgesBackground(mark)}>{mark}</span> : ""
                                            )
                                        }) : ""
                                    }
                                    <h4>{product.name}</h4>
                                </div>
                                {
                                product.features.map((feature, index) => {
                                return(
                                <p key={index}>{feature}</p>
                            )
                                })}
                            </>                                                                                
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTableProductNameAndFeatures;