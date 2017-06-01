import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
// import '../imports/ui/module/test';
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
