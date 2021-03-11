import React from 'react';
import {AuthContext} from '../../App';

class HomeProductsSection extends React.Component {
        state = {
            products: [],
            productName: "",
            producerName: this.props.appState.producerName,
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


    componentDidMount() {
        this.setState({
            products: this.props.products
        })
    }

    handleChange = (e) => {
        const {limit} = this.state;
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (limit === "16") {
                this.setState({
                    firstProduct: 0,
                    lastProduct: 15
                })
            }
            if (limit === "32") {
                this.setState({
                    firstProduct: 0,
                    lastProduct: 31
                })
            }
            if (limit === "64") {
                this.setState({
                    firstProduct: 0,
                    lastProduct: 63
                })
            }
        })
    }


    handlePage = (paginationIndex) => {
        const {limit} = this.state;
        this.setState({
            paginationCounter: paginationIndex,
            firstProduct: (paginationIndex * Number(limit)) - Number(limit),
            lastProduct: (paginationIndex * Number(limit)) - 1
        })
    }

    handlePrivious = () => {
        const {paginationCounter, limit} = this.state;
        if (paginationCounter > 1) {
            this.setState({
                paginationCounter: paginationCounter  - 1,
                firstProduct: ((paginationCounter * Number(limit)) - Number(limit)) - Number(limit),
                lastProduct: ((paginationCounter * Number(limit)) - 1) - Number(limit)
            })
        } else {
            return
        }
    }

    handleNext = (paginationButtons) => {
        const {paginationCounter, limit} = this.state;
        if (paginationCounter < paginationButtons.length) {
            this.setState({
                paginationCounter: paginationCounter  + 1,
                firstProduct: ((paginationCounter * Number(limit)) - Number(limit)) + Number(limit),
                lastProduct: ((paginationCounter * Number(limit)) - 1) + Number(limit)
            })
        } else {
            return
        }
        
    }

    render() {
        const {products, orderBy, productName, producerName, priceFrom, priceTo, limit, firstProduct, lastProduct, paginationCounter} = this.state;

        let producersNames = [];

        for (let i=0; i<products.length; i++) {
            producersNames.push(products[i].producer)
        }
        const uniqueProducers = [...new Set(producersNames)]

        uniqueProducers.sort()

        if (orderBy === "Price 0-9") {
            products.sort((a, b) => {
                return parseFloat(Number(a.price)) - parseFloat(Number(b.price))
            })
        }

        if (orderBy === "Price 9-0") {
            products.sort((a, b) => {
                return parseFloat(Number(b.price)) - parseFloat(Number(a.price))
            })
        }

        if (orderBy === "Name A-Z") {
            products.sort((a, b) => {
                return a.producer > b.producer ? 1 : -1
            })
        }

        if (orderBy === "Name Z-A") {
            products.sort((a, b) => {
                return b.producer > a.producer ? 1 : -1
            })
        }  
        
        let renderOfProducts = [];

        
        products.map((value) => {
            if (value.name.toLowerCase().includes(productName.toLowerCase()) && value.producer.includes(producerName) && value.price >= priceFrom) {
                if (value.price <= priceTo || priceTo === "") {                    
                    renderOfProducts.push(value)
                }
            } 
            return renderOfProducts          
        })


        let paginationButtons = [];

        if (renderOfProducts.length > limit) {
            for (let i=0; i<Math.ceil(renderOfProducts.length / limit); i++) {
                paginationButtons.push(i + 1)
            }
        } else {
            console.log(false)
        }


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
                    ({handleAddToBasket}) => {
                        return(
                                <div id="Home">
                                    <div className="HomeSortSection">
                                    <div className="sort-container sort-by-product-name-container">
                                        <label>Product Name
                                            <input type="text" name="productName" value={productName} onChange={this.handleChange}></input>
                                        </label>
                                    </div>
                                    <div className="sort-container sort-by-producer-container">
                                        <label>Producer
                                            <select type="text" name="producerName" onChange={this.handleChange}>
                                                <option value="">Choose ...</option>
                                                    {
                                                    uniqueProducers.map((producer, index) => {
                                                    return(
                                                            this.props.appState.samsungOrAppleSelected === true && producer === producerName ? <option key={index} value={producer} selected>{producer}</option> : <option key={index} value={producer}>{producer}</option>
                                                        )
                                                    })
                                                    }
                                            </select>
                                        </label>
                                    </div>
                                    <div className="sort-container sort-by-price-from-container">
                                        <label>Price From
                                            <input type="text" name="priceFrom" value={priceFrom} onChange={this.handleChange}></input>
                                        </label>
                                    </div>
                                    <div className="sort-container sort-by-price-to-container">
                                        <label>Price To
                                            <input type="text" name="priceTo" value={priceTo} onChange={this.handleChange}></input>
                                        </label>
                                    </div>
                                    <div className="sort-container sort-by-order-by-container">
                                        <label>Order By
                                            <select type="text" name="orderBy" onChange={this.handleChange}>
                                                <option value="">Featured</option>
                                                <option value="Price 0-9">Price 0-9</option>
                                                <option value="Price 9-0">Price 9-0</option>
                                                <option value="Name A-Z">Name A-Z</option>
                                                <option value="Name Z-A">Name Z-A</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="sort-container sort-by-limit-container">
                                        <label>Order By
                                            <select type="text" name="limit" onChange={this.handleChange}>
                                                <option value="16">16</option>
                                                <option value="32">32</option>
                                                <option value="64">64</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="HomeProductsSection">
                                    {
                                        renderOfProducts.map((product, index) => {
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
                                        {paginationButtons.length > 1 ? <ul>
                                            <li onClick={this.handlePrivious}>Previous</li>
                                            {
                                                paginationButtons.map((button, index, array) => {
                                                    return(
                                            <li key={index} onClick={() => this.handlePage(index + 1)} style={{background: paginationCounter === index + 1 ? "#0c5acf" : "white", color: paginationCounter === index + 1 ? "white" : ""}}>{button}</li>
                                                    )
                                                })
                                            }
                                            <li onClick={() => this.handleNext(paginationButtons)}>Next</li>
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