import React from 'react';
import SortByProducerSection from './SortByProducerSection';
import SortByProductNameSection from './SortByProductNameSection';
import SortByPriceFromSection from './SortByPriceFromSection';
import SortByPriceToSection from './SortByPriceToSection';
import SortByOrderBySection from './SortByOrderBySection';
import SortByLimitSection from './SortByLimitSection';

class HomeSortSection extends React.Component{
    render() {
        return(
            <div className="HomeSortSection">
                <SortByProductNameSection />
                <SortByProducerSection />
                <SortByPriceFromSection />
                <SortByPriceToSection />
                <SortByOrderBySection />
                <SortByLimitSection />
            </div>
        )
    }
}

export default HomeSortSection;