import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './Feed'
import Player from './Player'
import Playlist from './Playlist'
import './home.css'
import Sidebar from '../MyComponents/sidebar'


export default function Home() {
  return (
    <BrowserRouter>
    <Sidebar/>
    <div className='main-body'>
     
    
     <Routes>
         <Route path="/playlist"  element= {<Playlist/>} />
         <Route path="/feed"  element= {<Feed/>} />
         <Route path="/player"  element= {<Player/>} />
     </Routes>
  
  </div>
  </BrowserRouter>
  )
}
