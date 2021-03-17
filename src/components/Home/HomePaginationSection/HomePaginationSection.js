import React from 'react';
import HomePaginationNavSection from './HomePaginationNavSection';

class HomePaginationSection extends React.Component{
    render() {
        return(
            <div className="HomePaginationSection">
                <HomePaginationNavSection paginationButtons={this.props.paginationButtons} />
            </div>
        )
    }
}

export default HomePaginationSection;