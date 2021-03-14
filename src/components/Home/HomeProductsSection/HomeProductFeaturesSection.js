import React from 'react';

class HomeProductFeaturesSection extends React.Component{
    render() {
        const product = this.props.product;
        return( 
            <div className="product-features-container">
                    <p>{product.name}</p>
            </div>
        )
    }
}

export default HomeProductFeaturesSection;