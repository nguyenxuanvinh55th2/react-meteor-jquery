import React from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import __ from 'lodash';
import moment from 'moment';
import accounting from 'accounting';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      pictureSelect: 0
    }
  }
  render(){
    return (
      <div>Home</div>
    )
  }
}
