import React, { Component } from 'react';
import __ from 'lodash';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreator from "../actions/actionCreator";

function mapStateToProps(state){
  return {
    users: state.users,
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators(actionCreator, dispatch);
}

class Main extends Component {
  constructor(props){
    super(props);
    setInterval(()=>{
      this.props.loginCommand({name: moment.valueOf()})
   }, 5000);
  }
  render() {
    let childProps = __.cloneDeep(this.props);
     delete childProps.children;
    return (
      <div>
        {
          React.cloneElement(this.props.children, childProps)
        }
      </div>
    );
  }
}
const App = connect (mapStateToProps,mapDispathToProps)(Main);

export default App;
