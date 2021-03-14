import React from 'react';
import {AuthContext} from '../../App';
import HomeSortSection from './HomeSortSection/HomeSortSection';

class HomeProductsSection extends React.Component {
        state = {
            products: [],
            productName: "",
            producerName: "",
            priceFrom: "",
            priceTo: "",
            orderBy: "",
            limit: "16",
            paginationCounter: 1,
            firstProduct: 0,
            lastProduct: 15,
            productsPerPage: 1,
            samsungOrAppleSelected: false,
            basket: [],
            total: 0
        }




    handleChange = (e) => {
        const {limit} = this.state;
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        console.log(this.props.uniqueProducers)
        const {products, orderBy, productName, producerName, priceFrom, priceTo, limit, firstProduct, lastProduct, paginationCounter} = this.state;  


        




        const productStyle = (index) => {

            if (index % 4 === 0) {
                return {marginRight: "3.33%"}
            }
            
            if (index % 4 === 1) {
                return {marginLeft: "3.33%", marginRight: "3.33%"}
            }
            
            if (index % 4 === 2) {
                return {marginLeft: "3.33%", marginRight: "3.33%"}
            }
            
            if (index % 4 === 3) {
                return {marginLeft: "3.33%"}
            }
        }

        const badgesBackground = (mark) => {
            if (mark === "LastItems") {
                return {background: "#ffc539"}
            }
            if (mark === "Sale" || mark === "Promotion" || mark === "Bestseller") {
                return {background: "red", color: "white"}
            }
        } 

        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleAddToBasket}) => {
                        return(
                                <div id="Home">
                                    <HomeSortSection uniqueProducers={this.props.uniqueProducers} />
                                <div className="HomeProductsSection">
                                    {
                                        appState.products.map((product, index) => {
                                                        return(
                                                            index >= firstProduct && index <= lastProduct ? <div key={product.id} className="product-container" style={productStyle(index)}>
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
                                <div className="HomePaginationSection">
                                    <nav className="pagination-container">
                                        {this.props.paginationButtons.length > 1 ? <ul>
                                            <li onClick={this.handlePrivious}>Previous</li>
                                            {
                                                this.props.paginationButtons.map((button, index, array) => {
                                                    return(
                                            <li key={index} onClick={() => this.handlePage(index + 1)} style={{background: paginationCounter === index + 1 ? "#0c5acf" : "white", color: paginationCounter === index + 1 ? "white" : ""}}>{button}</li>
                                                    )
                                                })
                                            }
                                            <li onClick={() => this.handleNext(this.props.paginationButtons)}>Next</li>
                                        </ul> : ""}
                                    </nav>
                                </div>
                            </div>            
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomeProductsSection;