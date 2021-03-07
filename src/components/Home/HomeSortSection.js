import React from 'react';

class HomeSortSection extends React.Component {
    state = {
        products: [],
        productName: ""
    }

    sendData = (value) => {
        this.props.parentCallback(value)
    }


    componentDidMount() {
        this.setState({
            products: this.props.products
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        //console.log(this.state.products)
        return(
            <div className="HomeSortSection">

            </div>
        )
    }
}

export default HomeSortSection;