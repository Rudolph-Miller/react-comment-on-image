window.React = require('react');
import { render } from 'react-dom';
import React, { Component } from 'react';
import { hello } from 'react-comment-on-image';

class App extends Component {
  render() {
    hello();
    return (
      <div>Hello</div>
    );
  }
}

render(<App />, document.getElementById('app'));
