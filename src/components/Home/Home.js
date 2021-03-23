import React from 'react';
import HomeSortSection from './HomeSortSection/HomeSortSection';
import HomeProductsSection from './HomeProductsSection/HomeProductsSection';
import HomePaginationSection from './HomePaginationSection/HomePaginationSection';

class Home extends React.Component {
    render() {
        return(
            <div id="Home">
                <HomeSortSection />
                <HomeProductsSection products={this.props.products} />
                <HomePaginationSection />
            </div>            
        )
    }
}

export default Home;