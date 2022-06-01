import React from 'react'
import Audioplayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
import './player.css'
import Card from '../MyComponents/Card';

export default function Player() {

 const musicTracks =  [
  {
    title : "Blue Side",
    artist: "Jhope",
    // src :"https://soundcloud.com/bangtan/0302hopeworld_blueside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    img_src: '/blueside.jpg'
},

{
  title : "Bicycle",
   artist: "RM",
  // src :"https://soundcloud.com/bangtan/bicycleforarmy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  img_src: '/bicycle.jpg'
},
{
   title : "Abyss",
   artist: "Jin",
  //  src :"https://soundcloud.com/bangtan/2020jinbirthday?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  img_src: '/abyss.jpg'
  
},
{
   title : "Still with you",
   artist: "Jungkook",
  //  src : "https://soundcloud.com/bangtan/thankyouarmy2020?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  img_src: '/stillwu.jpeg'
},
{
   title : "Snow Flower",
   artist: "V",
   src : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
   img_src: '/snow.jpg'
},
{
  title: "filter",
  artist: "Jimin",
  src : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  img_src: '/filter.jpg'
},
{
  title: "Daechwita",
  artist: "Agust D",
  // img_src : "https://static.toiimg.com/photo/msid-83286751/83286751.jpg",
  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  img_src: '/daechi.jpg'
}
  
];



const [trackIndex, setTrackIndex] = useState(0);


const handleClickPrevious = () => {
  setTrackIndex((currentTrack) =>
    currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
  );
};

const handleClickNext = () => {
  setTrackIndex((currentTrack) =>
    currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
  );
};
console.log(musicTracks[trackIndex].img_src)



return (
  // <footer>
  <div className= "screen-container">
  <div className="Player">
    <h1>Music Player</h1>
    {/* <div className="details-img"> */}
                <img src={musicTracks[trackIndex].img_src} alt=""  />
 
            {/* </div> */}
    <Card song={musicTracks} />
    <Audioplayer 
      style={{ width: "300px" }}
      style={{ borderRadius: "1rem" }}
      autoPlay
      layout="horizontal"
      src={musicTracks[trackIndex].src}
      onPlay={(e) => console.log("onPlay")}
      showSkipControls={true}
      // showJumpControls={false}
      header ={`Now playing:  ${musicTracks[trackIndex].title} by ${musicTracks[trackIndex].artist}  `}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
      
    />
  </div>
  </div>
  // </footer>
);
}








































{/* <ReactPlayer
  playing
  url={[
    {src: 'foo.webm', type: 'video/webm'},
    {src: 'foo.ogg', type: 'video/ogg'}
  ]}
/>
<track> elements for subtitles can be added using config.file:

<ReactPlayer
  playing
  url='foo.webm'
  config={{ file: {
    tracks: [
      {kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true},
      {kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja'},
      {kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de'}
    ]
  }}}
/> */}