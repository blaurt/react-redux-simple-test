import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {inc, dec} from './actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Child from './child';

export class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    value: {this.props.value}
                    <br/>
                    <button onClick={this.props.incValue}>+</button>
                    <button onClick={this.props.decValue}>-</button>
                </p>
                <Child/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.manageClick.reduxStoreValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incValue: bindActionCreators(inc, dispatch),
        decValue: bindActionCreators(dec, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
