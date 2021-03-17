import React from 'react';

class CartTableTbodyTrThirdColumnnSection extends React.Component {
    render() {   
        const product = this.props.product;   
        return(                                                
            <div>
                <p style={{color: "red"}}>{(product.price).toFixed(2)}</p>
                {
                product.oldPrice !== null ? <p style={{textDecoration: "line-through"}}>{(product.oldPrice).toFixed(2)} PLN</p> : ""
                }   
            </div>
        )
    }
}

export default CartTableTbodyTrThirdColumnnSection;