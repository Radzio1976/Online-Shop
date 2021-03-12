import React from 'react';
import {AuthContext} from '../../App';

class HomeSortSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                        <div className="HomeSortSection">
                            <div className="sort-container sort-by-product-name-container">
                                <label>Product Name
                                    <input type="text" name="productName" value={appState.productName} onChange={this.handleChange}></input>
                                </label>
                            </div>
                            <div className="sort-container sort-by-producer-container">
                                <label>Producer
                                    <select type="text" name="producerName" onChange={this.handleChange}>
                                        <option value="">Choose ...</option>
                                            {
                                            this.props.uniqueProducers.map((producer, index) => {
                                            return(
                                                    <option key={index} value={producer}>{producer}</option>
                                                )
                                            })
                                            }
                                    </select>
                                </label>
                            </div>
                            <div className="sort-container sort-by-price-from-container">
                                <label>Price From
                                    <input type="text" name="priceFrom" value={appState.priceFrom} onChange={this.handleChange}></input>
                                </label>
                            </div>
                            <div className="sort-container sort-by-price-to-container">
                                <label>Price To
                                    <input type="text" name="priceTo" value={appState.priceTo} onChange={this.handleChange}></input>
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
                                <label>Limit
                                    <select type="text" name="limit" onChange={this.handleChange}>
                                        <option value="16">16</option>
                                        <option value="32">32</option>
                                        <option value="64">64</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
                
        )
    }
}

export default HomeSortSection;