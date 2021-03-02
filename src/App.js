import react from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends react.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('https://simko.it/themes/simko-it/assets/products.json')
    .then(res => {
      this.setState({
        products: res.data
      })
    })
    .catch(err => {
      console.log("Nie udało się pobrać bazy produktów", err)
    })
  }
  render() {
    return(
      <div id="App">
        <BrowserRouter>
        <Nav data={this.state.products} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
