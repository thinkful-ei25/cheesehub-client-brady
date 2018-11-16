import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchUser } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Hello {this.props.username}</h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    username: state.userReducer.name
  };
};

export default connect(mapStateToProps)(App);



