import React from 'react';
import {AuthContext} from '../../../App';

class HomePaginationUlSection extends React.Component{
    render() {
        const paginationButtons = this.props.paginationButtons;
        return(
            <AuthContext.Consumer>
                {
                    ({appState, handlePage, handlePrivious, handleNext}) => {
                        return(
                            <>
                                {paginationButtons.length > 1 ? <ul>
                                    <li onClick={() => handlePrivious}>Previous</li>
                                    {
                                        paginationButtons.map((button, index, array) => {
                                            return(
                                    <li key={index} onClick={() => handlePage(index + 1)} style={{background: appState.paginationCounter === index + 1 ? "#0c5acf" : "white", color: appState.paginationCounter === index + 1 ? "white" : ""}}>{button}</li>
                                            )
                                        })
                                    }
                                    <li onClick={() => handleNext(paginationButtons)}>Next</li>
                                </ul> : ""}
                            </>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomePaginationUlSection;