import React from 'react';
import {AuthContext} from '../../../App';


class SortByProductNameLabelSection extends React.Component{
    render() {
        //console.log(this.props)
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange}) => {
                        return(
                            <label>Product Name
                                <input type="text" name="productName" value={appState.productName} onChange={e => handleChange(e.target.name, e.target.value)}></input>
                            </label>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default SortByProductNameLabelSection;