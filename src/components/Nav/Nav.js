import React from 'react';
import {withRouter} from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const products = this.props.data;

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
            <div className="navigation">
                <nav className="nav">
                    <ul>
                        <li onClick={() => this.props.history.push('/')}>Homepage</li>
                        <li>On Sale <span>{saleProducts()}</span></li>
                        <li>Samsung <span>{samsungProducts()}</span></li>
                        <li>Apple <span>{appleProducts()}</span></li>
                    </ul>
                </nav>
                <nav className="nav">
                    <ul>
                        <li>Cart <span>{100} PLN</span></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(Nav);