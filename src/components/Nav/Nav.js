import React from 'react';
import {withRouter} from 'react-router-dom';
import LeftNav from './LeftNav';
import RightNav from './RightNav';


class Nav extends React.Component {
    render() {

        return(
            <div className="navigation">
                <LeftNav />
                <RightNav />
            </div>
        )
    }
}

export default withRouter(Nav);