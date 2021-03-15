import React from 'react';
import {AuthContext} from '../../../App';
import HomePaginationUlSection from './HomePaginationUlSection';

class HomePaginationNavSection extends React.Component{
    render() {
        const paginationButtons = this.props.paginationButtons;
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <nav className="pagination-container">
                                <HomePaginationUlSection paginationButtons={this.props.paginationButtons} />
                            </nav>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomePaginationNavSection;