import react, {createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Registration from './components/Registration';

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
    total: 0,
    key: ""
  }

  componentDidMount() {
    axios.get('https://simko.it/themes/simko-it/assets/products.json')
    .then(res => {
      this.setState({
        mainBaseOfProducts: res.data,
        products: res.data,
        basket: JSON.parse(localStorage.getItem("addedProducts")) === null ? [] : JSON.parse(localStorage.getItem("addedProducts"))
      })
    })
    .then(() => {
      let sum = 0;
      this.state.basket.forEach(productInBasket => {
        sum += productInBasket.price
      })
      this.setState({
        total: sum
      })
    })
    .catch(err => {
      console.log("Nie udało się pobrać bazy produktów", err)
    })
  }

  getCurrentKey = (key) => {
    this.setState({
      key: key
    })
  }

  changeLimit = () => {
    const {limit} = this.state;

    this.setState({
        paginationCounter: 1,
        firstProduct: 0,
        lastProduct: limit === "16" ? 15 : limit === "32" ? 31 : limit === "64" ? 63 : this.state.lastProduct
    })
  }

  changeOrderBy = () => {
    const {orderBy} = this.state;
    let products = this.state.mainBaseOfProducts;

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
    return products
  }

  changeRestOfSorts = () => {
    let products = this.state.mainBaseOfProducts;
    const {productName, producer, priceFrom, priceTo} = this.state;

    let sortedProducts = products.filter(product => {
      return product.name.toLowerCase().includes(productName.toLowerCase()) && product.producer.includes(producer) && product.price >= Number(priceFrom) && 
      (product.price <= Number(priceTo) || priceTo === "")
    })

    this.setState({
      products: sortedProducts
    })
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    }, () => {
      this.getCurrentKey(key)
      this.changeLimit()
      this.changeOrderBy()
      this.changeRestOfSorts()
  }) 
  }

  resetAllSorts = () => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    this.setState({
      products: mainBaseOfProducts,
      productName: "",
      producer: "",
      priceFrom: "",
      priceTo: "",
      orderBy: "",
      limit: "16",
      paginationCounter: 1,
      firstProduct: 0,
      lastProduct: 15
    })
  }

  getOnSaleProductsArray = () => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;

    let onSaleProducts = mainBaseOfProducts.filter(product => {
      return product.marks !== null && product.marks.includes("Sale")
    })

    return onSaleProducts
  }

  getOnSaleQty = () => {
    return this.getOnSaleProductsArray().length
  }

  getOnSaleProducts = () => {
    this.resetAllSorts()
 
    this.setState({
      products: this.getOnSaleProductsArray()
    })    
  }

  getProductsByProducer = (value) => {
    this.resetAllSorts()
    const mainBaseOfProducts = this.state.mainBaseOfProducts;

    let productsByProducer = mainBaseOfProducts.filter(product => {
        return product.producer === value
    })

    this.setState({
      producer: value,
      products: productsByProducer
    })
  }
  
  getProductsByProducerQty = (value) => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;

    let productsByProducerQty = mainBaseOfProducts.filter(product => {
        return product.producer === value
    })
    return productsByProducerQty.length
  }

  uniqueProducers = () => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    let producersNames = [];

    mainBaseOfProducts.forEach((product, index) => {
      producersNames.push(product.producer)
    })

    const uniqueProducers = [...new Set(producersNames)]
    return uniqueProducers.sort();
  }

  paginationButtons = () => {
    const products = this.state.products;
    const {limit} = this.state;
    let paginationButtons = [];

    if (products.length > limit) {
        for (let i=0; i<Math.ceil(products.length / limit); i++) {
            paginationButtons.push(i + 1)
        }
        return paginationButtons
    } else {
        return paginationButtons = [];
    }
  }

  uniqueProductsInBasket = () => {
    let basket = this.state.basket;
    const uniqueProductsInBasket = Array.from(new Set(basket.map(product => product.id)))
    .map(id => {
      return basket.find(product => product.id === id)
    })
    return uniqueProductsInBasket
  }

  inBasketProductsQty = (productId) => {
    const basket = this.state.basket;
    let qty = 0;
    for (let i=0; i<basket.length; i++) {
        if (basket[i].id === productId) {
          qty += 1
        }
    }
    return qty
  }

  handlePage = (paginationIndex) => {
    let {limit} = this.state;
    limit = Number(limit)

    this.setState({
        paginationCounter: paginationIndex,
        firstProduct: (paginationIndex * limit) - limit,
        lastProduct: (paginationIndex * limit) - 1
    })
  }

  handlePrevious = () => {
    const {paginationCounter} = this.state;
    let {limit} = this.state;
    limit = Number(limit)

    if (paginationCounter > 1) {
        this.setState({
            paginationCounter: paginationCounter  - 1,
            firstProduct: ((paginationCounter * limit) - limit) - limit,
            lastProduct: ((paginationCounter * limit) - 1) - limit
        })
    } else {
        return
    }
  }

  handleNext = (paginationButtons) => {
    const {paginationCounter} = this.state;
    let {limit} = this.state;
    limit = Number(limit)
    if (paginationCounter < paginationButtons.length) {
        this.setState({
            paginationCounter: paginationCounter  + 1,
            firstProduct: ((paginationCounter * limit) - limit) + limit,
            lastProduct: ((paginationCounter * limit) - 1) + limit
        })
    } else {
        return
    }
    
  }

  handleAddToBasket = (product) => {
    this.setState({
        basket: JSON.parse(localStorage.getItem("addedProducts")) === null ? [] : JSON.parse(localStorage.getItem("addedProducts"))
    }, () => {
        let basket = this.state.basket;

        if (basket === []) {
            basket.push(product)
            localStorage.setItem("addedProducts", JSON.stringify(basket))
        } else {
            basket.push(product);
            localStorage.setItem("addedProducts", JSON.stringify(basket))
        }
        let sum = 0;

        basket.forEach(productInBasket => {
          sum += productInBasket.price
        })

        this.setState({
            basket,
            total: sum
        })
    })
  }

  removeProduct = (productId, productPrice) => {
    let basket = this.state.basket
    let {total} = this.state;
    let index = 0;

    index = basket.findIndex(product => product.id === productId)
    if (index === -1) {
      return
    } else {
      basket.splice(index, 1)
      total = total - productPrice
      if (total === 0) {
        localStorage.removeItem("addedProducts")
      } else {
        localStorage.setItem("addedProducts", JSON.stringify(basket))
      }
      
      this.setState({
        basket,
        total
      })
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

  render() { 
    return(
      <AuthContext.Provider value={{
        appState: this.state, 
        handleChange: this.handleChange, 
        resetAllSorts: this.resetAllSorts, 
        getOnSaleQty: this.getOnSaleQty, 
        getOnSaleProducts: this.getOnSaleProducts, 
        getProductsByProducer: this.getProductsByProducer, 
        getProductsByProducerQty: this.getProductsByProducerQty,  
        uniqueProducers: this.uniqueProducers,
        paginationButtons: this.paginationButtons,
        uniqueProductsInBasket: this.uniqueProductsInBasket,
        inBasketProductsQty: this.inBasketProductsQty,
        handlePage: this.handlePage, 
        handlePrevious: this.handlePrevious, 
        handleNext: this.handleNext, 
        handleAddToBasket: this.handleAddToBasket, 
        removeProduct: this.removeProduct,
        productStyle: this.productStyle, 
        badgesBackground: this.badgesBackground
        }}>
        <div id="App">
          <BrowserRouter>
            <Nav />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/registration' component={Registration} />
              </Switch>
          </BrowserRouter>
        </div>
      </AuthContext.Provider>
    )
  }
}

export {AuthContext};
export default App;

