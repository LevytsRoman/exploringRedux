import React, { Component } from 'react';
import myConnect from './my-connect';

const App = props => (
  <div>
    hello my name is {props.name}
    <br/>
    and I am {props.age}
  </div>
)

const mapStateToProps = state => (
  {
    name: state.name,
    age: state.age
  }
)

export default myConnect(mapStateToProps)(App);
