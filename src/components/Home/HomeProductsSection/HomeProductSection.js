import React from 'react';
import {AuthContext} from '../../../App';
import HomeProductImageSection from './HomeProductImageSection';
import HomeProductBadgesSection from './HomeProductBadgesSection';
import HomeProductNameSection from './HomeProductNameSection';
import HomeProductFeaturesSection from './HomeProductFeaturesSection';
import HomeProductBuyButtonAndPriceSection from './HomeProductBuyButtonAndPriceSection';

class HomeProductSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, productStyle}) => {
                        return(
                            <>
                                {
                                    this.props.products.map((product, index) => {
                                                    return(
                                                        index >= appState.firstProduct && index <= appState.lastProduct ? 
                                    <div key={product.id} className="product-container" style={productStyle(index)}>
                                        <HomeProductImageSection product={product} />
                                        <HomeProductBadgesSection product={product} />
                                        <HomeProductNameSection product={product} /> 
                                        <HomeProductFeaturesSection product={product} />
                                        <HomeProductBuyButtonAndPriceSection product={product} />
                                    </div> : ""
                                        )
                                    })
                                }
                            </>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomeProductSection;