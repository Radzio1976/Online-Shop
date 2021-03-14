import React from 'react';
import SortByLimitSelectSection from './SortByLimitSelectSection';

class SortByLimitLabelSection extends React.Component{
    render() {
        return(
            <label>Limit
                <SortByLimitSelectSection />
            </label>
        )
    }
}

export default SortByLimitLabelSection;