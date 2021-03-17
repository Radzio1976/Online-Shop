import React from 'react';

class CartTableTheadTrSection extends React.Component {
    render() {       
        return(
            <tr>
                <td className="table-first-column">#</td>
                <td className="table-second-column" style={{paddingLeft: "40px"}}>Product</td>
                <td className="table-third-column" style={{textAlign: "right"}}>Unit</td>
                <td className="table-fourth-column">Quantity</td>
                <td className="table-fifth-column">Row Total</td>
                <td className="table-sixth-column"></td>
            </tr>
        )
    }
}

export default CartTableTheadTrSection;