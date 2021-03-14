import React from 'react';
import SortByOrderBySelectSection from './SortByOrderBySelectSection';

class SortByOrderByLabel extends React.Component{
    render() {
        return(
            <label>Order By
                <SortByOrderBySelectSection />
            </label>
        )
    }
}

export default SortByOrderByLabel;