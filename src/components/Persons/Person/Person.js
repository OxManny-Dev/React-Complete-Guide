import React, { Component }from 'react';
import classes from './Person.css';
import WithClass from './../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount");
  }
  render() {
    console.log("[Person.js] inside render");

    return <WithClass classes={classes.Person}>
      <p onClick={this.props.click}>Hi I'm {this.props.name} and I'm {this.props.age} years old</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>
    </WithClass>
  }
}

export default Person;