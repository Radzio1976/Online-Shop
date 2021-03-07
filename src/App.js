import react, {createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

const AuthContext = createContext();

class App extends react.Component {
  state = {
    products: [],
    samsungOrAppleSelected: false,
    producerName: "",
    basket: null,
    total: 0
  }

  componentDidMount() {
    axios.get('https://simko.it/themes/simko-it/assets/products.json')
    .then(res => {
      this.setState({
        products: res.data,
        total: localStorage.getItem("total") === null ? 0 : localStorage.getItem("total"),
        basket: JSON.parse(localStorage.getItem("addedProducts"))
      })
    })
    .catch(err => {
      console.log("Nie udało się pobrać bazy produktów", err)
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

  render() {
    console.log(this.state.total)
    console.log(this.state.basket)
    //console.log(this.state.samsungSelected)
    return(
      <AuthContext.Provider value={{appState: this.state, handleAddToBasket: this.handleAddToBasket}}>
      <div id="App">
        <BrowserRouter>
        <Nav products={this.state.products} samsungOrAppleSelected={this.samsungOrAppleSelected}/>
          <Switch>
            <Route path='/' exact component={() => <Home products={this.state.products} appState={this.state} />} />
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
