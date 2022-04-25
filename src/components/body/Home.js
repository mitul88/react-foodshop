import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}


class Home extends Component {
    componentDidMount() {
        console.log("home props:", this.props)
        this.props.dispatch({
            type: "TEST"
        })
    }

    render() {
        document.title="Home";
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);