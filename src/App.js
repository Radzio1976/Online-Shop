import react from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends react.Component {
  state = {
    products: [],
    samsungOrAppleSelected: false,
    producerName: ""
  }

  componentDidMount() {
    axios.get('https://simko.it/themes/simko-it/assets/products.json')
    .then(res => {
      this.setState({
        products: res.data,
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

  render() {
    console.log(this.state.samsungSelected)
    return(
      <div id="App">
        <BrowserRouter>
        <Nav products={this.state.products} samsungOrAppleSelected={this.samsungOrAppleSelected}/>
          <Switch>
            <Route path='/' exact component={() => <Home products={this.state.products} appState={this.state} />} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
