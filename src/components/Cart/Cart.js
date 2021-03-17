import React from 'react';
import {AuthContext} from '../../App';
import CartNavSection from './CartNavSection/CartNavSection';
import CartTableSection from './CartTableSection/CartTableSection';

class Cart extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({appState, removeProduct, badgesBackground}) => {
                        return(
                            <div className="Cart">   
                            {appState.total === 0 ?
                                <h1 style={{textAlign: "center"}}>Twój koszyk jest pusty</h1> : 
                            <>
                                <CartNavSection />
                                <CartTableSection />
                                <div className="cart-total">
                                    <p>Total <span>{(appState.total).toFixed(2)} PLN</span></p>
                                </div>
                                </>
                            }                            
                                
                            </div>
                        )
                    }
                }
            </AuthContext.Consumer>

                            


        )
    }
}

export default Cart;