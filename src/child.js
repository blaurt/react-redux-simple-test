import React from 'react';
import {connect} from 'react-redux';

class Child extends React.Component {

    render() {
        return (
            <div>
                <h1>Child start</h1>
                <div>{this.props.parentValueInRedux}</div>
                <h1>Child end</h1>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        parentValueInRedux: reduxState.manageClick.reduxStoreValue
    }
}

export default connect(mapStateToProps)(Child);