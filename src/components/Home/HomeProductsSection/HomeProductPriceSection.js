import React from 'react';

class HomeProductpriceSection extends React.Component{
    render() {
        const product = this.props.product;
        return(
            <div className="price-container">
                {
                product.oldPrice == null ? <p className="price" style={{color: "black"}}>{product.price} PLN</p> : 
                <p className="price">{product.price} PLN</p>
                }

                {
                product.oldPrice !== null ? <p style={{textDecoration: "line-through"}}>{product.oldPrice} PLN</p> : ""
                }
            </div>
        )
    }
}

export default HomeProductpriceSection;