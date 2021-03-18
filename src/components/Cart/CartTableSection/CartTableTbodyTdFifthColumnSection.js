import React from 'react';

class CartTableTbodyTdFifthColumnSection extends React.Component {
    render() {   
        const product = this.props.product; 
        const inBasketProductsQty = this.props.inBasketProductsQty;
        return(
            <td className="table-fifth-column">{(inBasketProductsQty(product.id) * product.price).toFixed(2)} PLN</td>
        )
    }
}

export default CartTableTbodyTdFifthColumnSection;