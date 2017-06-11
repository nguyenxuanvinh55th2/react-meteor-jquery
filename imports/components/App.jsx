import React, { Component } from 'react';
import __ from 'lodash'
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let childProps = __.cloneDeep(this.props);
   delete childProps.children;
    return (
      <div>
        ddd
      </div>
    );
  }
}
