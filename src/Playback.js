import React from 'react'
import {useRef} from 'react'

const Playback = () => {
  const controls = useRef();
  const url = " http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const playVideo = ()=>{
     controls.current.play();
  }
  const pauseVideo = ()=>{
     controls.current.pause();
  }



  return (
    <>
       <div className = "container">
       <div className = "video">
       <video ref = {controls} width = {"600px"} height = {"350px"}controls>
           <source src = {url} type = {"video/mp4"}/>
        </video>
        </div>
        <div className='btn-btn'>
            <button className ="btn" onClick = {() => playVideo()}>Play</button>
            <button className = "btn" onClick = {() => pauseVideo()}>Pause</button>
        </div>
        </div>
        </>
  )
}

export default Playback