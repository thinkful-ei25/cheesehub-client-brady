import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses(this.props.dispatch));
  }

  render() {
    const cheeses = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>;
    });

    return (
      <div>
        <ul>{cheeses}</ul>
      </div>
    );
  }
}

CheeseList.defaultProps = {
  cheeses: []
};

const mapStateToProp = state => {
  return {
    cheeses: state.cheeses
  };
};

export default connect(mapStateToProp)(CheeseList);
