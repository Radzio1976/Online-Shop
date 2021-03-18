import React from 'react';
import {AuthContext} from '../../../App';

class SortByPriceToLabelSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
            {
                ({appState, handleChange}) => {
                    return(
                        <label>Price To
                            <input type="text" name="priceTo" value={appState.priceTo} onChange={e => handleChange(e.target.name, e.target.value)} autoFocus={appState.key === "priceTo"}></input>
                        </label>
                    )
                }
            }
        </AuthContext.Consumer>
        )
    }
}

export default SortByPriceToLabelSection;