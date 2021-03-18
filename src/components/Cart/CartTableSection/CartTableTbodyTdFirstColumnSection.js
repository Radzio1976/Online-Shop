import React from 'react';

class CartTableTbodyTdFirstColumnSection extends React.Component {
    render() {   
        const index = this.props.index;  
        return(
            <td className="table-first-column">{index + 1}.</td>
        )          
    }
}

export default CartTableTbodyTdFirstColumnSection;