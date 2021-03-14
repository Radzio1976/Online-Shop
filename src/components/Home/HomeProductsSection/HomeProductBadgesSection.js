import React from 'react';
import {AuthContext} from '../../../App';

class HomeProductBadgesSection extends React.Component{
    render() {
        const product = this.props.product;
        return(
            <AuthContext.Consumer>
                {
                    ({badgesBackground}) => {
                        return(
                            <div className="product-badges-container">
                            {
                                product.marks !== null ? product.marks.map((mark, index) => {
                                        return(
                                            mark !== "CrossedPrice" ? <span key={index} style={badgesBackground(mark)}>{mark}</span> : ""
                                        )
                                    }) : ""
                                }
                            </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomeProductBadgesSection;