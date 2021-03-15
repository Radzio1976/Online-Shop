import React from 'react';
import {AuthContext} from '../../App';
import HomeSortSection from './HomeSortSection/HomeSortSection';
import HomeProductsSection from './HomeProductsSection/HomeProductsSection';
import HomePaginationSection from './HomePaginationSection/HomePaginationSection';

class Home extends React.Component {
        state = {
            paginationCounter: 1,
            firstProduct: 0,
            lastProduct: 15,
            productsPerPage: 1,
            samsungOrAppleSelected: false,

            total: 0
        }


    render() {
        console.log(this.props.uniqueProducers)
        const {paginationCounter} = this.state;  



        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleAddToBasket}) => {
                        return(
                                <div id="Home">
                                    <HomeSortSection uniqueProducers={this.props.uniqueProducers} />
                                    <HomeProductsSection products={this.props.products} />
                                    <HomePaginationSection paginationButtons={this.props.paginationButtons} />
                            </div>            
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default Home;