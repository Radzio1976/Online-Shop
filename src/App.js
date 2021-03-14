import react, {createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

const AuthContext = createContext();

class App extends react.Component {
  state = {
    mainBaseOfProducts: [],
    products: [],
    productName: "",
    producer: "",
    priceFrom: "",
    priceTo: "",
    orderBy: "",
    limit: 16,
    paginationCounter: 1,
    firstProduct: 0,
    lastProduct: 15,
    basket: [],
    total: 0
  }

  componentDidMount() {
    axios.get('https://simko.it/themes/simko-it/assets/products.json')
    .then(res => {
      this.setState({
        mainBaseOfProducts: res.data,
        products: res.data
      })
    })
    .catch(err => {
      console.log("Nie udało się pobrać bazy produktów", err)
    })
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  resetSorts = () => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    this.setState({
      products: mainBaseOfProducts,
      productName: "",
      producer: "",
      priceFrom: "",
      priceTo: "",
      orderBy: "",
      limit: "16",
      paginationCounter: 1
    })
  }

  getOnSaleQty = (value) => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    
    let sum = 0;
    for (let i=0; i<mainBaseOfProducts.length; i++) {
        if (mainBaseOfProducts[i].marks !== null) {
            for (let k=0; k<mainBaseOfProducts[i].marks.length; k++) {
                if (mainBaseOfProducts[i].marks[k] === value) {
                    sum += 1;
                }
            }
        }
    }
    return sum;
  }

  handleSaleProducts = (value) => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    
    let onSale = [];
    for (let i=0; i<mainBaseOfProducts.length; i++) {
      if (mainBaseOfProducts[i].marks !== null) {
        for (let k=0; k<mainBaseOfProducts[i].marks.length; k++) {
          if (mainBaseOfProducts[i].marks[k] === value) {            
            onSale.push(mainBaseOfProducts[i])
            }
          }         
        } 
    }
    
    this.setState({
      products: onSale
    })
    
  }

  getProductsByProducer = (value) => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    let productsByProducer = mainBaseOfProducts.filter(product => {
        return product.producer === value
    })
    this.setState({
      products: productsByProducer
    })
    console.log(productsByProducer)
  }
  
  getProductsByProducerQty = (value) => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    let productsByProducerQty = mainBaseOfProducts.filter(product => {
        return product.producer === value
    })
    return productsByProducerQty.length
  }

  productStyle = (index) => {
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

  badgesBackground = (mark) => {
      if (mark === "LastItems") {
        return {background: "#ffc539"}
    }
    if (mark === "Sale" || mark === "Promotion" || mark === "Bestseller") {
        return {background: "red", color: "white"}
    }
  }

 
  


  render() { 
        // Tworzenie tablicy z unikalnymi nazwami producentów
        const products = this.state.products;
        const {limit} = this.state;

        let producersNames = [];
    
        products.forEach((product, index) => {
          producersNames.push(product.producer)
        })
  
        const uniqueProducers = [...new Set(producersNames)]
    
        uniqueProducers.sort()

        // Tworzenie tablicy z przyciskami paginacji
        let paginationButtons = [];

        if (products.length > limit) {
            for (let i=0; i<Math.ceil(products.length / limit); i++) {
                paginationButtons.push(i + 1)
            }
        } else {
            console.log(false)
        }


    return(
      <AuthContext.Provider value={{appState: this.state, handleChange: this.handleChange, resetSorts: this.resetSorts, getOnSaleQty: this.getOnSaleQty, handleSaleProducts: this.handleSaleProducts, getProductsByProducer: this.getProductsByProducer, getProductsByProducerQty: this.getProductsByProducerQty, productStyle: this.productStyle, badgesBackground: this.badgesBackground}}>
      <div id="App">
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route path='/' exact component={() => <Home uniqueProducers={uniqueProducers} paginationButtons={paginationButtons} />} />
            <Route path='/cart' component={() => <Cart />} />
          </Switch>
        </BrowserRouter>
      </div>
      </AuthContext.Provider>
    )
  }
}

export {AuthContext};
export default App;
