import React from 'react';
import HomeSortSection from './HomeSortSection';
import HomeProductsSection from './HomeProductsSection';

class Home extends React.Component {
    render() {
        return(
            <div id="Home">
            <HomeSortSection />
            <HomeProductsSection products={this.props.products} />
            </div>
        )
    }
}

export default Home;