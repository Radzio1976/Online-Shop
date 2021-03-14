import React from 'react';
import react from 'react';
import {AuthContext} from '../../../App';

class HomePaginationSection extends React.Component{
    render() {
        return(
            <AuthContext.Consumer>
                {
                    ({appState}) => {
                        return(
                            <div className="HomePaginationSection">
                            <nav className="pagination-container">
                                {this.props.paginationButtons.length > 1 ? <ul>
                                    <li onClick={this.handlePrivious}>Previous</li>
                                    {
                                        this.props.paginationButtons.map((button, index, array) => {
                                            return(
                                    <li key={index} onClick={() => this.handlePage(index + 1)} style={{background: appState.paginationCounter === index + 1 ? "#0c5acf" : "white", color: appState.paginationCounter === index + 1 ? "white" : ""}}>{button}</li>
                                            )
                                        })
                                    }
                                    <li onClick={() => this.handleNext(this.props.paginationButtons)}>Next</li>
                                </ul> : ""}
                            </nav>
                        </div>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomePaginationSection;