import React from 'react';
import HomeProductSection from './HomeProductSection';

class HomeProductsSection extends React.Component{
    render() {
        return(
            <div className="HomeProductsSection">
                <HomeProductSection products={this.props.products} />
            </div>
        )
    }
}

export default HomeProductsSection;