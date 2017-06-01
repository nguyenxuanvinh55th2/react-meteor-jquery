import React, { Component } from 'react';
import { aaa } from './module/test.js'
// App component - represents the whole app
export default class Header extends Component {
  componentDidMount(){
    let _this = this;
    let { abc } = _this.refs;
    // aaa(abc); //  pass 1 ob in function
    aaa(_this.refs)// call funtion jquery
  }
  render() {
    return (
      <div className="abc" ref="abc">
        <nav>
          <ul>
            <li className="livinh" ref="livinh">test1</li>
            <li>test2</li>
          </ul>
        </nav>
      </div>
    );
  }
}
