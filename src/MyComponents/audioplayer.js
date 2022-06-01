import React from 'react'
import ReactPlayer from 'react-player'


function Audioplayer(props) {

     
 


  return (
    <div className='c-player'>
        <h3>Playing Now</h3>
        
        <p>{props.song.title}</p>
        <div className='right-player-body'>
          <p> {props.nextSong.title}</p> 
     </div>
    </div>
  )
}

export default Audioplayer