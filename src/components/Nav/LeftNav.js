import React from 'react';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../App';

class LeftNav extends React.Component {
    state = {

    }

render() {
 return(
  <AuthContext.Consumer>
   {
    ({appState, resetSorts, handleSaleProducts, getOnSaleQty, getProductsByProducer, getProductsByProducerQty}) => {
        return(
    <nav className="left-nav">
     <ul>
      <li onClick={() => {resetSorts()
                          this.props.history.push('/')}}>Homepage</li>
      <li onClick={() => {handleSaleProducts("Sale")
                          this.props.history.push('/')}}>On Sale <span>{getOnSaleQty("Sale")}</span></li>
      <li onClick={() => {getProductsByProducer("Samsung")
                          this.props.history.push('/')}}>Samsung<span>{getProductsByProducerQty("Samsung")}</span></li>
      <li onClick={() => {getProductsByProducer("Apple")
                          this.props.history.push('/')}}>Apple <span>{getProductsByProducerQty("Apple")}</span></li>
     </ul>
    </nav>
            )
    }
    }
  </AuthContext.Consumer>
    )
}
}

export default withRouter(LeftNav);