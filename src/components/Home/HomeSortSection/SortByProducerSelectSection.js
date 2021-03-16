import React from 'react';
import {AuthContext} from '../../../App';

class SortByProducerSelectSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange}) => {
                        return(
                            <select type="text" name="producer" value={appState.producer} onChange={e => handleChange(e.target.name, e.target.value)}>
                                <option value="">Choose ...</option>
                                    {
                                    this.props.uniqueProducers.map((producer, index) => {
                                    return(
                                        appState.producerSelected === true && producer === appState.producer ? <option key={index} selected>{producer}</option> : <option key={index}>{producer}</option>
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