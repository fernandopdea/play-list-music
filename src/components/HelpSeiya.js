import React from 'react';
import image from '../image/image-music.png';

class HelpSeiya extends React.Component {
  constructor() {
    super();
    this.seiya = this.seiya.bind(this);
  }

  seiya() {
    return (
      <div>
        <img src={image} alt="music" />
      </div>
    );
  }

  render() {
    return <div className="help">{this.seiya()}</div>;
  }
}

export default HelpSeiya;
