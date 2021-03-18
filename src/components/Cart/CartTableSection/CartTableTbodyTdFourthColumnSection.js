import React from 'react';

class CartTableTbodyTdFourthColumnSection extends React.Component {
    render() {   
        const product = this.props.product;   
        const inBasketProductsQty = this.props.inBasketProductsQty;
        return(
            <td className="table-fourth-column">x {inBasketProductsQty(product.id)}</td>
        )
    }
}

export default CartTableTbodyTdFourthColumnSection;