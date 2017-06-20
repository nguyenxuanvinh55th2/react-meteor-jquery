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
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>
      <div className="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

        <div className="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
        <button className="btn btn-primary" onClick={() => {
          this.handle();
        }}>Add123456</button>
        <a href="/about">About vinh nguyen this sao may che det mia may ce</a>
      </div>
    )
  }
}
