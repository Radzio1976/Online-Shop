import React from 'react';
import HomeProductBuyButtonSection from './HomeProductBuyButtonSection';
import HomeProductpriceSection from './HomeProductPriceSection';

class HomeProductBuyButtonAndPriceSection extends React.Component{
    render() {
        const product = this.props.product;
        return(
            <div className="product-buy-button-and-price-container">
                <HomeProductBuyButtonSection product={product} />
                <HomeProductpriceSection product={product} />
            </div>
        )
    }
}

export default HomeProductBuyButtonAndPriceSection;