import react from 'react';
import {BrowserRouter, Switch, Router} from 'react-router-dom';

class App extends react.Component {
  render() {
    return(
      <div id="App">
        <BrowserRouter>
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
