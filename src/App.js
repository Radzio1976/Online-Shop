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
    limit: "16",
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
    const {limit} = this.state;
    console.log(key)
    console.log(value)
    this.setState({
      [key]: value
    }, () => {
      console.log(value)
      if (value === "16") {
          this.setState({
              firstProduct: 0,
              lastProduct: 15
          })
      }
      if (value === "32") {
          this.setState({
              firstProduct: 0,
              lastProduct: 31
          })
      }
      if (value === "64") {
          this.setState({
              firstProduct: 0,
              lastProduct: 63
          })
      }
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

  lastProduct = () => {
    const {limit} = this.state;
    if (limit === "16") {
      this.setState({
        firstProduct: 0,
        lastProduct: 15
    })
      //return 15
    }
    if (limit === "32") {
      this.setState({
        firstProduct: 0,
        lastProduct: 31
    })
      //return 31
    }
    if (limit === "64") {
      this.setState({
        firstProduct: 0,
        lastProduct: 63
    })
      //return 63
    }
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

  handlePage = (paginationIndex) => {
    console.log(paginationIndex)
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
    //console.log(this.state.firstProduct)
    //console.log(this.state.productName)
        // Tworzenie tablicy z unikalnymi nazwami producentów
        const {mainBaseOfProducts, orderBy, productName, producer, priceFrom, priceTo, limit, firstProduct, lastProduct, paginationCounter} = this.state;
        let products = this.state.products;
        //const {limit} = this.state;

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


        let sortedProducts = products.filter(product => {
          return product.name.toLowerCase().includes(productName.toLowerCase()) && product.producer.includes(producer) && product.price >= Number(priceFrom) && (product.price <= Number(priceTo) || priceTo === "")
        })
        products = sortedProducts

        let producersNames = [];
    
        mainBaseOfProducts.forEach((product, index) => {
          producersNames.push(product.producer)
        })
  
        const uniqueProducers = [...new Set(producersNames)]
    
        uniqueProducers.sort();

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
      <AuthContext.Provider value={{appState: this.state, products: this.products, handleChange: this.handleChange, resetSorts: this.resetSorts, getOnSaleQty: this.getOnSaleQty, handleSaleProducts: this.handleSaleProducts, getProductsByProducer: this.getProductsByProducer, getProductsByProducerQty: this.getProductsByProducerQty, lastProduct: this.lastProduct, productStyle: this.productStyle, badgesBackground: this.badgesBackground, handlePage: this.handlePage, handlePrivious: this.handlePrivious, handleNext: this.handleNext}}>
      <div id="App">
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route path='/' exact component={() => <Home products={products} uniqueProducers={uniqueProducers} paginationButtons={paginationButtons} />} />
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
