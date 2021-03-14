import React from 'react';
import {AuthContext} from '../../../App';

class SortByLimitSelectSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handleChange}) => {
                        return(
                            <select type="text" name="limit" value={appState.limit} onChange={e => handleChange(e.target.name, e.target.value)}>
                                <option value="16">16</option>
                                <option value="32">32</option>
                                <option value="64">64</option>
                            </select>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default SortByLimitSelectSection;