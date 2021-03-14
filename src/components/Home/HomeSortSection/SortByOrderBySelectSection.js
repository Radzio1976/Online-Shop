import React from 'react';
import {AuthContext} from '../../../App';

class SortByOrderBySelectSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange}) => {
                        return(
                            <select type="text" name="orderBy" value={appState.orderBy} onChange={e => handleChange(e.target.name, e.target.value)}>
                                <option value="">Featured</option>
                                <option value="Price 0-9">Price 0-9</option>
                                <option value="Price 9-0">Price 9-0</option>
                                <option value="Name A-Z">Name A-Z</option>
                                <option value="Name Z-A">Name Z-A</option>
                        </select>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default SortByOrderBySelectSection;