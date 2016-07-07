import { Component } from 'react';

export default class extends Component {
  render() {
    const comments = this.props.comments.map((comment) => {
      return (
        <div>
          {comment.content}
        </div>
      );
    });

    return (
      <div>
        {comments}
      </div>
    );
  }
}
