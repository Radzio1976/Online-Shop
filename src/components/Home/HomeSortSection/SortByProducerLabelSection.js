import React from 'react';
import SortByProducerSelectSection from './SortByProducerSelectSection';

class SortByProducerLabelSection extends React.Component{
    render() {
        return(
            <label>Producer
                <SortByProducerSelectSection />
            </label>
        )
    }
}

export default SortByProducerLabelSection;