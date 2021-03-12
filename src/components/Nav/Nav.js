import React from 'react';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../App';
import LeftNav from './LeftNav';
import RightNav from './RightNav';


class Nav extends React.Component {
        state = {

        }

    render() {

        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="navigation">
                            <LeftNav />
                            <RightNav />
                           </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default withRouter(Nav);