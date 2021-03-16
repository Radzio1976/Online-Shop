import React from 'react';
import HomePaginationUlSection from './HomePaginationUlSection';

class HomePaginationNavSection extends React.Component{
    render() {
        return(
            <nav className="pagination-container">
                <HomePaginationUlSection paginationButtons={this.props.paginationButtons} />
            </nav>
        )
    }
}

export default HomePaginationNavSection;