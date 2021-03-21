import React from 'react';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../App';

class LeftNav extends React.Component {
render() {
    return(
        <AuthContext.Consumer>
            {
                ({resetAllSorts, getOnSaleProducts, getOnSaleQty, getProductsByProducer, getProductsByProducerQty}) => {
                    return(
                <nav className="left-nav">
                    <ul>
                    <li onClick={() => {resetAllSorts()
                                        this.props.history.push('/')}}>Homepage</li>
                    <li onClick={() => {getOnSaleProducts()
                                        this.props.history.push('/')}}>On Sale <span>{getOnSaleQty()}</span></li>
                    <li onClick={() => {getProductsByProducer("Samsung")
                                        this.props.history.push('/')}}>Samsung<span>{getProductsByProducerQty("Samsung")}</span></li>
                    <li onClick={() => {getProductsByProducer("Apple")
                                        this.props.history.push('/')}}>Apple <span>{getProductsByProducerQty("Apple")}</span></li>
                    </ul>
                </nav>
                    )
            }
            }
        </AuthContext.Consumer>
    )
    }
}

export default withRouter(LeftNav);