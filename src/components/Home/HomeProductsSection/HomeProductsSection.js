import React from 'react';
import {AuthContext} from '../../../App';

class HomeProductsSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleAddToBasket, productStyle, badgesBackground}) => {
                        return(
                            <div className="HomeProductsSection">
                                    {
                                        appState.products.map((product, index) => {
                                                        return(
                                                            index >= appState.firstProduct && index <= appState.lastProduct ? <div key={product.id} className="product-container" style={productStyle(index)}>
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.name}></img>
                                            </div>
                                            <div className="product-badges-container">
                                            {
                                                    product.marks !== null ? product.marks.map((mark, index) => {
                                                         return(
                                                             mark !== "CrossedPrice" ? <span key={index} style={badgesBackground(mark)}>{mark}</span> : ""
                                                         )
                                                     }) : ""
                                             }
                                            </div>
                                            <div className="product-name-container">
                                                 <h5>{product.producer}</h5>
                                            </div>  
                                            <div className="product-features-container">
                                                 <p>{product.name}</p>
                                            </div>
                                            <div className="product-buy-button-and-price-container">
                                                <div className="buy-button-container">
                                                     <button onClick={() => handleAddToBasket(product)}>Buy</button>
                                                </div>
                                                <div className="price-container">
                                                     {
                                                      product.oldPrice == null ? <p className="price" style={{color: "black"}}>{product.price} PLN</p> : 
                                                      <p className="price">{product.price} PLN</p>
                                                     }
                                    
                                                     {
                                                     product.oldPrice !== null ? <p style={{textDecoration: "line-through"}}>{product.oldPrice} PLN</p> : ""
                                                     }
                                                </div>
                                            </div>
                                </div> : ""
                                            )
                                        })
                                    }
                                </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomeProductsSection;