import React from 'react';
import {AuthContext} from '../../App';
import CartNavSection from './CartNavSection/CartNavSection';
import CartTableSection from './CartTableSection/CartTableSection';
import CartTotalSection from './CartTotalSection/CartTotalSection';

class Cart extends React.Component {
    render() {       
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="Cart">   
                            {appState.total === 0 ?
                                <h1 style={{textAlign: "center"}}>Twój koszyk jest pusty</h1> : 
                            <>
                                <CartNavSection />
                                <CartTableSection uniqueProductsInBasket={this.props.uniqueProductsInBasket} quantity={this.props.quantity} />
                                <CartTotalSection />
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