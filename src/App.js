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
    producersNames: [],
    productName: "",
    producerName: "",
    priceFrom: "",
    priceTo: "",
    orderBy: "",
    limit: 16,
    paginationCounter: 1,
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

  resetSorts = () => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    this.setState({
      products: mainBaseOfProducts,
      productName: "",
      producerName: "",
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

 
  


  render() { 
        // Tworzenie tablicy z unikalnymi nazwami producentów
        const products = this.state.products;
        const {limit} = this.state;

        let producersNames = [];
    
        for (let i=0; i<products.length; i++) {
            producersNames.push(products[i].producer)
        }
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
      <AuthContext.Provider value={{appState: this.state, resetSorts: this.resetSorts, getOnSaleQty: this.getOnSaleQty, handleSaleProducts: this.handleSaleProducts, getProductsByProducer: this.getProductsByProducer, getProductsByProducerQty: this.getProductsByProducerQty}}>
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
