import React from 'react';
import {AuthContext} from '../../../App';

class CartTotalSection extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="cart-total">
                                <p>Total <span>{(appState.total).toFixed(2)} PLN</span></p>
                            </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default CartTotalSection;