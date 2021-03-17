import React from 'react';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../../App';

class CartNavSection extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="cart-nav">
                                <h1>Cart Checkout</h1>
                                {appState.total > 0 ?<button onClick={() => this.props.history.push("/registration")}>Submit Order</button> : <button>Submit Order</button>}
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default withRouter(CartNavSection);