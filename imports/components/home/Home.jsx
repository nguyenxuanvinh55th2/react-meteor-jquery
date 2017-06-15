import React from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Tasks } from '../../../collections/tasks.js'
import __ from 'lodash';
import moment from 'moment';
import accounting from 'accounting';
import {Meteor} from 'meteor/meteor'
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      pictureSelect: 0
    }
  }
  componentDidMount(){
        Meteor.autorun(() => {
            console.log(Tasks.find({}).fetch());
        });
    }
  handle(){
    Tasks.insert({nam: '3vinh'});
    this.props.loginCommand({_id: "vinh"});
  }
  render(){
    console.log(this.props);
    return (
      <div>
        <button onClick={() => {
          this.handle();
        }}>Add</button>
        <a href="/about">About</a>
      </div>
    )
  }
}
