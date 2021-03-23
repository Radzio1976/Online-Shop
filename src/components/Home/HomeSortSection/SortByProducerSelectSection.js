import React from 'react';
import {AuthContext} from '../../../App';

class SortByProducerSelectSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange, uniqueProducers}) => {
                        return(
                            <select type="text" name="producer" value={appState.producer} onChange={e => handleChange(e.target.name, e.target.value)}>
                                <option value="">Choose ...</option>
                                    {
                                    uniqueProducers().map((producer, index) => {
                                    return(
                                        <option key={index}>{producer}</option>
                                        )
                                    })
                                    }
                            </select>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default SortByProducerSelectSection;