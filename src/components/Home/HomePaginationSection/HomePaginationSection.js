import React from 'react';
import {AuthContext} from '../../../App';
import HomePaginationNavSection from './HomePaginationNavSection';

class HomePaginationSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="HomePaginationSection">
                                <HomePaginationNavSection paginationButtons={this.props.paginationButtons} />
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomePaginationSection;