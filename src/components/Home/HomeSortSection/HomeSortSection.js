import React from 'react';
import {AuthContext} from '../../../App';
import SortByProducerSection from './SortByProducerSection';
import SortByProductNameSection from './SortByProductNameSection';
import SortByPriceFromSection from './SortByPriceFromSection';
import SortByPriceToSection from './SortByPriceToSection';
import SortByOrderBySection from './SortByOrderBySection';
import SortByLimitSection from './SortByLimitSection';

class HomeSortSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                        <div className="HomeSortSection">
                            <SortByProductNameSection />
                            <SortByProducerSection uniqueProducers={this.props.uniqueProducers} />
                            <SortByPriceFromSection />
                            <SortByPriceToSection />
                            <SortByOrderBySection />
                            <SortByLimitSection />
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
                
        )
    }
}

export default HomeSortSection;