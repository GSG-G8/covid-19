import React from 'react'
import ReactPlayer from "react-player"
import './style.css';

function Emped(){
    return(
    <div   className="video" >
   <ReactPlayer
        url="https://youtu.be/PSnSo9kYlH4"
        width='35rem'
        height='20rem'
        />
    </div>
    )
}

export default Emped;