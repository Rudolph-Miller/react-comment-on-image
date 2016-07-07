window.React = require('react');
import { render } from 'react-dom';
import React, { Component } from 'react';
import CommentOnImage from 'react-comment-on-image/lib/index.js';

class App extends Component {
  render() {
    const image = '/image/screen_capture.png';
    const comments = [
      {
        rect: {
          x: 0,
          y: 0,
          width: 50,
          height: 50
        },
        content: 'Sample comment! :)',
        x: 100,
        y: 100
      },
      {
        rect: {
          x: 150,
          y: 150,
          width: 80,
          height: 150
        },
        content: 'Sample comment! ;p',
        x: 250,
        y: 400
      }
    ];

    return (
      <CommentOnImage
        image={image}
        comments={comments} />
    );
  }
}

render(<App />, document.getElementById('app'));
