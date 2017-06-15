import React from 'react';
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    return (
      <div>
        About
        { this.props.users.name ? 'hvae name' : 'ss'}
      </div>
    )
  }
}
