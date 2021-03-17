import React from 'react';
import {AuthContext} from '../../../App';

class HomeProductBuyButtonSection extends React.Component{
    render() {
        const product = this.props.product;
        return(
            <AuthContext.Consumer>
                {
                    ({handleAddToBasket, removeProducts}) => {
                        return(
                            <div className="buy-button-container">
                                 <button onClick={() => handleAddToBasket(product)}>Buy</button>
                            </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomeProductBuyButtonSection;