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
    ({appState}) => {
        return(
    <nav className="left-nav">
     <ul>
      <li>Homepage</li>
      <li>On Sale <span>10</span></li>
      <li>Samsung<span>20</span></li>
      <li>Apple <span>30</span></li>
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