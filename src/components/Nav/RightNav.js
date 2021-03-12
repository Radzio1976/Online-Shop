import React from 'react';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../App';

class RightNav extends React.Component {
    state = {

    }

render() {
 return(
  <AuthContext.Consumer>
   {
    ({appState}) => {
        return(
            <nav className="right-nav">
            <ul>
                {appState.total > 0 ?<li onClick={() => this.props.history.push('/cart')}>Cart <span>{appState.total} PLN</span></li> : <li>Cart <span>{appState.total} PLN</span></li>}
            </ul>
        </nav>
            )
    }
    }
  </AuthContext.Consumer>
    )
}
}

export default withRouter(RightNav);