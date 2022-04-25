import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log(state)
    return {
        dishes: state.dishes
    }
}


class Home extends Component {
    componentDidMount() {
        console.log("Home state: " + this.state);
        console.log( this.props);
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