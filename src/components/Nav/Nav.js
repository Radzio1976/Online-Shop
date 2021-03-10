import React from 'react';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../App';

class Nav extends React.Component {
        state = {
            samsungOrAppleSelected: false,
            producerName: "",
            total: localStorage.getItem("total")
        }

    resetSorts = () => {
        this.props.resetAllSorts()
    }

    handleSaleProducts = () => {
        this.props.productsOnSale()
    }

    handleSamsungOrAppleProducts = (producer) => {
        this.setState({
            samsungOrAppleSelected: true,
            producerName: producer
        }, () => {
            this.props.samsungOrAppleSelected(this.state.samsungOrAppleSelected, this.state.producerName)
        })
    }


    render() {
        const products = this.props.products;

        function saleProducts() {
            let saleProd = 0;
            for (let i=0; i<products.length; i++) {
                if (products[i].marks !== null) {
                    for (let k=0; k<products[i].marks.length; k++) {
                        if (products[i].marks[k] === "Sale") {
                            saleProd += 1;
                        }
                    }
                }
            }
            return saleProd;
        }

        function samsungProducts() {
            let samsungProd = 0;
            for (let i=0; i<products.length; i++) {
                if (products[i].producer === "Samsung") {
                    samsungProd += 1;
                }
            }
            return samsungProd;
        }

        function appleProducts() {
            let appleProd = 0;
            for (let i=0; i<products.length; i++) {
                if (products[i].producer === "Apple") {
                    appleProd += 1;
                }
            }
            return appleProd;
        }

        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="navigation">
                            <nav className="left-nav">
                                <ul>
                                    <li onClick={() => {this.resetSorts()
                                                        this.props.history.push('/')}}>Homepage</li>
                                    <li onClick={() => {this.handleSaleProducts()
                                                        this.props.history.push('/')}}>On Sale <span>{saleProducts()}</span></li>
                                    <li onClick={() => {this.handleSamsungOrAppleProducts("Samsung")
                                                        this.props.history.push('/')}}>Samsung<span>{samsungProducts()}</span></li>
                                    <li onClick={() => {this.handleSamsungOrAppleProducts("Apple")
                                                        this.props.history.push('/')}}>Apple <span>{appleProducts()}</span></li>
                                </ul>
                            </nav>
                            <nav className="right-nav">
                                <ul>
                                    {appState.total > 0 ?<li onClick={() => this.props.history.push('/cart')}>Cart <span>{appState.total} PLN</span></li> : <li>Cart <span>{appState.total} PLN</span></li>}
                                </ul>
                            </nav>
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default withRouter(Nav);