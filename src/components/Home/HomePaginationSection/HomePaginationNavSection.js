import React from 'react';
import {AuthContext} from '../../../App';

class HomePaginationNavSection extends React.Component{
    render() {
        const paginationButtons = this.props.paginationButtons;
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <nav className="pagination-container">
                                {paginationButtons.length > 1 ? <ul>
                                    <li onClick={this.handlePrivious}>Previous</li>
                                    {
                                        paginationButtons.map((button, index, array) => {
                                            return(
                                    <li key={index} onClick={() => this.handlePage(index + 1)} style={{background: appState.paginationCounter === index + 1 ? "#0c5acf" : "white", color: appState.paginationCounter === index + 1 ? "white" : ""}}>{button}</li>
                                            )
                                        })
                                    }
                                    <li onClick={() => this.handleNext(paginationButtons)}>Next</li>
                                </ul> : ""}
                            </nav>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomePaginationNavSection;