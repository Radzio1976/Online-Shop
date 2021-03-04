import React from 'react';

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
        productsPerPage: 1
    }

    componentDidMount() {
        this.setState({
            products: this.props.products
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (this.state.limit === "16") {
                this.setState({
                    firstProduct: 0,
                    lastProduct: 15
                })
            }
            if (this.state.limit === "32") {
                this.setState({
                    firstProduct: 0,
                    lastProduct: 31
                })
            }
            if (this.state.limit === "64") {
                this.setState({
                    firstProduct: 0,
                    lastProduct: 63
                })
            }
        })
    }


    handlePage = (paginationIndex) => {
        this.setState({
            firstProduct: (paginationIndex * Number(this.state.limit)) - Number(this.state.limit),
            lastProduct: (paginationIndex * Number(this.state.limit)) - 1
        })
    }

    render() {
        console.log(this.state.firstProduct)
        console.log(this.state.lastProduct)
        const {products} = this.state;
        //let products = this.props.products;

        let producersNames = [];

        for (let i=0; i<products.length; i++) {
            producersNames.push(products[i].producer)
        }
        const uniqueProducers = [...new Set(producersNames)]
        console.log(uniqueProducers)

        if (this.state.orderBy === "Price 0-9") {
            products.sort((a, b) => {
                return parseFloat(Number(a.price)) - parseFloat(Number(b.price))
            })
        }

        if (this.state.orderBy === "Price 9-0") {
            products.sort((a, b) => {
                return parseFloat(Number(b.price)) - parseFloat(Number(a.price))
            })
        }

        if (this.state.orderBy === "Name A-Z") {
            products.sort((a, b) => {
                return a.producer > b.producer ? 1 : -1
            })
        }

        if (this.state.orderBy === "Name Z-A") {
            products.sort((a, b) => {
                return b.producer > a.producer ? 1 : -1
            })
        }  
        
        let renderOfProducts = [];


        products.map((value) => {
            if (value.name.includes(this.state.productName) && value.producer.includes(this.state.producerName) && value.price >= this.state.priceFrom) {
                if (value.price <= this.state.priceTo || this.state.priceTo === "") {                    
                    renderOfProducts.push(value)
                }
            } 
            return renderOfProducts          
        })



        

        // Część kodu poniżej odpowiada za wyświetlanie się przycisków paginacji
        let paginationButtons = [];

        if (renderOfProducts.length > this.state.limit) {
            for (let i=0; i<Math.ceil(renderOfProducts.length / this.state.limit); i++) {
                paginationButtons.push(i + 1)
            }
        } else {
            console.log(false)
        }
        console.log(paginationButtons)

        return(
            <>
            <div className="HomeSortSection">
            <div className="sort-by-product-name-container">
                    <label>Product Name
                        <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div className="sort-by-producer-container">
                <label>Producer
                        <select type="text" name="producerName" onChange={this.handleChange}>
                        <option value="">Choose ...</option>
                            {
                                 uniqueProducers.map((producer, index) => {
                                    return(
                                        <option key={index} value={producer}>{producer}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                </div>
                <div className="sort-by-price-from-container">
                    <label>Price From
                    <input type="text" name="priceFrom" value={this.state.priceFrom} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div className="sort-by-price-to-container">
                    <label>Price To
                    <input type="text" name="priceTo" value={this.state.priceTo} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div className="sort-by-order-by-container">
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
                <div className="sort-by-limit-container">
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
                                        index >= this.state.firstProduct && index <= this.state.lastProduct ? <div key={product.id} className="product-container">
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
                                         </div> : ""
                                     )


                       

                    })
                }
            </div>
            <div className="HomePaginationSection">
                <nav className="pagination-container">
                    {paginationButtons.length > 1 ? <ul>
                        <li>Previous</li>
                        {
                            paginationButtons.map((button, index) => {
                                return(
                                    <li key={index} onClick={() => this.handlePage(index + 1)}>{button}</li>
                                )
                            })
                        }
                        <li>Next</li>
                    </ul> : ""}
                </nav>
            </div>
            </>
        )
    }
}

export default HomeProductsSection;