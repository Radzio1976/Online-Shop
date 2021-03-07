import React from 'react';
import HomeSortSection from './HomeSortSection';
import HomeProductsSection from './HomeProductsSection';

class Home extends React.Component {
    state = {
        productName: "",
        total: 0
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
            <HomeProductsSection products={this.props.products} appState={this.props.appState} />
            </div>
        )
    }
}

export default Home;