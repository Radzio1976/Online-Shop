import React from 'react';

class HomeProductsSection extends React.Component {
    render() {
        console.log(this.props.products)
        const products = this.props.products;
        return(
            <div className="HomeProductsSection">
                {
                    products.map((product) => {
                        return(
                            <div key={product.id} className="product-container">
                                <div className="product-image-container">
                                    <img src={product.thumbnail} alt={product.name}></img>
                                </div>
                                <div className="product-badges-container">
                                {
                                       product.marks !== null ? product.marks.map((mark, index) => {
                                            return(
                                                mark !== "CrossedPrice" ? <span key={index}>{mark}</span> : ""
                                            )
                                        }) : ""
                                }
                                </div>
                                <div className="product-name-container">
                                    <h5>{product.producer}</h5>
                                </div>  
                                <div className="product-features=container">
                                    <p>{product.name}</p>
                                </div>
                                <div className="product-buy-button-and-price-container">
                                    <div className="buy-button-container">
                                        <button>Buy</button>
                                    </div>
                                    <div className="price-container">
                                        <p>{product.price} PLN</p>
                                        {
                                        product.oldPrice !== null ? <p style={{textDecoration: "line-through"}}>{product.oldPrice} PLN</p> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default HomeProductsSection;