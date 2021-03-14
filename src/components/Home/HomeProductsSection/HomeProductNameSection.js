import React from 'react';

class HomeProductNameSection extends React.Component{
    render() {
        const product = this.props.product;
        return(
            <div className="product-name-container">
                    <h5>{product.producer}</h5>
            </div>  
        )
    }
}

export default HomeProductNameSection;