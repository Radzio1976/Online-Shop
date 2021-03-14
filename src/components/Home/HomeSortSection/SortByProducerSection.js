import React from 'react';
import SortByProducerLabelSection from './SortByProducerLabelSection';

class SortByProducerSection extends React.Component{
    render() {
        return(
            <div className="sort-container sort-by-producer-container">
                <SortByProducerLabelSection uniqueProducers={this.props.uniqueProducers} />
            </div>
        )
    }
}

export default SortByProducerSection;