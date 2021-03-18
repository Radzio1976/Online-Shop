import React from 'react';
import CartTableTbodyTdFirstColumnSection from './CartTableTbodyTdFirstColumnSection';
import CartTableTbodyTdSecondColumnSection from './CartTableTbodyTdSecondColumnSection';
import CartTableTbodyTdThirdColumnSection from './CartTableTbodyTdThirdColumnSection';
import CartTableTbodyTdFourthColumnSection from './CartTableTbodyTdFourthColumnSection';
import CartTableTbodyTdFifthColumnSection from './CartTableTbodyTdFifthColumnSection';
import CartTableTbodyTdSixthColumnSection from './CartTableTbodyTdSixthColumnSection';

class CartTableTbodyTrSection extends React.Component {
    render() {     
        return(
            <>
                <CartTableTbodyTdFirstColumnSection index={this.props.index} />
                <CartTableTbodyTdSecondColumnSection product={this.props.product} index={this.props.index} />                                                     
                <CartTableTbodyTdThirdColumnSection product={this.props.product} />
                <CartTableTbodyTdFourthColumnSection product={this.props.product} inBasketProductsQty={this.props.inBasketProductsQty} />
                <CartTableTbodyTdFifthColumnSection product={this.props.product} inBasketProductsQty={this.props.inBasketProductsQty} />
                <CartTableTbodyTdSixthColumnSection product={this.props.product} />
            </>
        )
    }
}

export default CartTableTbodyTrSection;