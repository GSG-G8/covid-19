import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './style.css';

function EmpedVideo({ url, width, height }) {
  return (
    <div className="video">
      <ReactPlayer url={url} width={width} height={height} />
    </div>
  );
}
EmpedVideo.propTypes = {
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
EmpedVideo.defaultProps = {
  url: 'https://youtu.be/PSnSo9kYlH4',
  width: '30rem',
  height: '15rem',
};

export default EmpedVideo;
