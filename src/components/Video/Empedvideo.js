import React from 'react'
import ReactPlayer from "react-player"
import PropTypes from 'prop-types';
import './style.css';

function EmpedVideo({url}){
    return(
    <div   className="video" >
   <ReactPlayer
        url={url}
        width='35rem'
        height='20rem'
        />
    </div>
    )
}
  EmpedVideo.propTypes = {
    url: PropTypes.string,
  };
  EmpedVideo.defaultProps = {
    url:'https://youtu.be/PSnSo9kYlH4'
  };

export default EmpedVideo;