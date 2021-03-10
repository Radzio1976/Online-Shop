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
    samsungOrAppleSelected: false,
    producerName: "",
    basket: [],
    total: 0,
    productName: ""
  }

  componentDidMount() {
    axios.get('https://simko.it/themes/simko-it/assets/products.json')
    .then(res => {
      this.setState({
        mainBaseOfProducts: res.data,
        products: res.data,
        total: JSON.parse(localStorage.getItem("total")) === null ? 0 : JSON.parse(localStorage.getItem("total")),
        basket: JSON.parse(localStorage.getItem("addedProducts"))
      })
    })
    .catch(err => {
      console.log("Nie udało się pobrać bazy produktów", err)
    })
  }


  resetAllSorts = () => {
    this.setState({
      products: this.state.mainBaseOfProducts,
      productName: "",
      producerName: this.state.productName,
      priceFrom: "",
      priceTo: "",
      orderBy: "",
      limit: "16",
      paginationCounter: 1
    })
  }

  productsOnSale = () => {
    const mainBaseOfProducts = this.state.mainBaseOfProducts;
    let onSale = [];
    for (let i=0; i<mainBaseOfProducts.length; i++) {
      if (mainBaseOfProducts[i].marks !== null) {
        for (let k=0; k<mainBaseOfProducts[i].marks.length; k++) {
          if (mainBaseOfProducts[i].marks[k] === "Sale") {            
            onSale.push(mainBaseOfProducts[i])
            }
          }         
        } 
    }
    this.setState({
      products: onSale
    })
  }

  samsungOrAppleSelected = (isSelected, producer) => {
    this.setState({
      samsungOrAppleSelected: isSelected,
      producerName: producer
    })
  }

  handleAddToBasket = (product) => {

    this.setState({
        basket: JSON.parse(localStorage.getItem("addedProducts"))
    }, () => {

        let basket = this.state.basket;
        console.log(this.state.basket)

        if (basket === null) {
            basket = []
            basket.push(product)

           localStorage.setItem("addedProducts", JSON.stringify(basket))
        } else {
            basket.push(product);

            localStorage.setItem("addedProducts", JSON.stringify(basket))
        }

        let sum = 0;

        for (let i=0; i<basket.length; i++) {
            sum += basket[i].price
        }
        localStorage.setItem("total", JSON.stringify(sum))

        this.setState({
            basket,
            total: sum
        })
    })
}

removeProduct = (productId, productPrice) => {
  let basket = JSON.parse(localStorage.getItem("addedProducts"));
  let total = JSON.parse(localStorage.getItem("total"));
  
  let index = 0;
  index = basket.findIndex(product => product.id === productId)
  if (index === -1) {
    return
  } else {
    basket.splice(index, 1)
    total = total - productPrice
    localStorage.setItem("addedProducts", JSON.stringify(basket))

    localStorage.setItem("total", JSON.stringify(total))
    
    this.setState({
      basket,
      total
    })
  }
}

  render() {
    return(
      <AuthContext.Provider value={{appState: this.state, handleAddToBasket: this.handleAddToBasket, handleRemove: this.handleRemove, removeProduct: this.removeProduct}}>
      <div id="App">
        <BrowserRouter>
        <Nav products={this.state.products} samsungOrAppleSelected={this.samsungOrAppleSelected} resetAllSorts={this.resetAllSorts} productsOnSale={this.productsOnSale} />
          <Switch>
            <Route path='/' exact component={() => <Home products={this.state.products} appState={this.state}/>} />
            <Route path='/cart' component={() => <Cart  appState={this.state} />} />
          </Switch>
        </BrowserRouter>
      </div>
      </AuthContext.Provider>
    )
  }
}

export {AuthContext};
export default App;
