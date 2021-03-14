import React from 'react';
import SortByProducerSelectSection from './SortByProducerSelectSection';

class SortByProducerLabelSection extends React.Component{
    render() {
        return(
            <label>Producer
                <SortByProducerSelectSection uniqueProducers={this.props.uniqueProducers} />
            </label>
        )
    }
}

export default SortByProducerLabelSection;