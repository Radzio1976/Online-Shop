import React from 'react';
import CartTableTheadSection from './CartTableTheadSection';
import CartTableTbodySection from './CartTableTbodySection';

class CartTableSection extends React.Component {
    render() {       
        return(
            <table className="cart-table">
                <CartTableTheadSection />
                <CartTableTbodySection />
            </table>
        )
    }
}

export default CartTableSection;