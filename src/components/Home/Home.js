import React from 'react';
import HomeSortSection from './HomeSortSection/HomeSortSection';
import HomeProductsSection from './HomeProductsSection/HomeProductsSection';
import HomePaginationSection from './HomePaginationSection/HomePaginationSection';

class Home extends React.Component {
    render() {
        return(
            <div id="Home">
                <HomeSortSection uniqueProducers={this.props.uniqueProducers} />
                <HomeProductsSection products={this.props.products} />
                <HomePaginationSection paginationButtons={this.props.paginationButtons} />
            </div>            
        )
    }
}

export default Home;