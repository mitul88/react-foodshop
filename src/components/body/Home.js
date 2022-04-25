import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}


class Home extends Component {
    render() {
        document.title="Home";
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);