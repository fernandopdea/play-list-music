import React from 'react';
import styles from '../styles/divPlayList.module.css';

class SeiyaVideo extends React.Component {
  render() {
    const video1 = 'https://www.youtube.com/watch?v=1K5BWbRx8tE';
    const videoEmbed1 = video1.replace('watch?v=', 'embed/');
    const video2 = 'https://www.youtube.com/watch?v=T-L7CKJFMQM';
    const videoEmbed2 = video2.replace('watch?v=', 'embed/');
    const video3 = 'https://www.youtube.com/watch?v=B07gkUjSLZs';
    const videoEmbed3 = video3.replace('watch?v=', 'embed/');
    const video4 = 'https://www.youtube.com/watch?v=5jk-j_SwUq4';
    const videoEmbed4 = video4.replace('watch?v=', 'embed/');
    const video5 = 'https://www.youtube.com/watch?v=7h0GjL907aU';
    const videoEmbed5 = video5.replace('watch?v=', 'embed/');

    return (
      <div className={styles.divPlayList}>
        <h1>Play List</h1>
        <iframe
          title="battle-video"
          data-testid="video"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={videoEmbed1}
        />
        <iframe
          title="battle-video"
          data-testid="video"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={videoEmbed2}
        />
        <iframe
          title="battle-video"
          data-testid="video"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={videoEmbed3}
        />
        <iframe
          title="battle-video"
          data-testid="video"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={videoEmbed4}
        />
        <iframe
          title="battle-video"
          data-testid="video"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={videoEmbed5}
        />
      </div>
    );
  }
}

export default SeiyaVideo;
