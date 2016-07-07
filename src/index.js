import { Component, PropTypes } from 'react';
import Comments from './comments';

export default class extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      rect: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
      }).isRequired,
      content: PropTypes.node.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }))
  }

  render() {
    const { image, comments } = this.props;
    const img = new Image();
    img.src = image;
    const size = { width: img.width, height: img.height };

    return (
      <div>
        <image src={image} />
        <Comments
          size={size}
          comments={comments} />
      </div>
    );
  }
}
