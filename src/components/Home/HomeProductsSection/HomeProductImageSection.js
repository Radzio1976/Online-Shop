import React from 'react';

class HomeProductImageSection extends React.Component{
    render() {
        const product = this.props.product;
        return(
            <div className="product-image-container">
                <img src={product.image} alt={product.name}></img>
            </div>
        )
    }
}

export default HomeProductImageSection;