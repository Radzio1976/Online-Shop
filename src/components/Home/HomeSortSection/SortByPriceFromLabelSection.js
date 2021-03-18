import React from 'react';
import {AuthContext} from '../../../App';

class SortByPriceFromSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange}) => {
                        return(
                            <label>Price From
                                <input type="text" name="priceFrom" value={appState.priceFrom} onChange={e => handleChange(e.target.name, e.target.value)} autoFocus={appState.key === "priceFrom"}></input>
                            </label>
                        )
                    }
                }
            </AuthContext.Consumer>


        )
    }
}

export default SortByPriceFromSection;