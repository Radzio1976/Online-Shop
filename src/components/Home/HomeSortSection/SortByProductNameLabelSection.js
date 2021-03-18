import React from 'react';
import {AuthContext} from '../../../App';


class SortByProductNameLabelSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange}) => {
                        return(
                            <label>Product Name
                                <input type="text" name="productName" value={appState.productName} onChange={e => handleChange(e.target.name, e.target.value)} autoFocus={appState.key === "productName"}></input>
                            </label>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default SortByProductNameLabelSection;