import react from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends react.Component {
  render() {
    return(
      <div id="App">
        <BrowserRouter>
        <Nav />
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
