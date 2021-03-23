import React from 'react';
import HomePaginationUlSection from './HomePaginationUlSection';

class HomePaginationNavSection extends React.Component{
    render() {
        return(
            <nav className="pagination-container">
                <HomePaginationUlSection />
            </nav>
        )
    }
}

export default HomePaginationNavSection;