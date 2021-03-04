import React from 'react';
import HomeSortSection from './HomeSortSection';
import HomeProductsSection from './HomeProductsSection';

class Home extends React.Component {
    state = {
        productName: ""
    }

    callbackFunction = (childData) => {
        this.setState({
            productName: childData
        })
    }

    render() {
        return(
            <div id="Home">
            <HomeSortSection products={this.props.products} parentCallback={this.callbackFunction} />
            <HomeProductsSection products={this.props.products} data={this.state} />
            </div>
        )
    }
}

export default Home;