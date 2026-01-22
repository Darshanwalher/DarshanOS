import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowState, setWindowsState}) => {
  return (
    <footer className='dock'>
        <div onClick={()=>{setWindowsState(state=>({...state,github:true}))}}
        className="icon github"><img src="/Doc-Icon/github.svg" alt="" /></div>

        <div onClick={()=>{setWindowsState(state=>({...state,note:true}))}}
        className="icon note"><img src="/Doc-Icon/note.svg" alt="" /></div>

        <div onClick={()=>{setWindowsState(state=>({...state,resume:true}))}}
        className="icon pdf"><img src="/Doc-Icon/pdf.svg" alt="" /></div>

        <div  onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
        className="icon calender"><img src="/Doc-Icon/calender.svg" alt="" /></div>

        <div onClick={()=>{setWindowsState(state=>({...state,spotify:true}))}}
         className="icon spotify"><img src="/Doc-Icon/spotify.svg" alt="" /></div>

        <div onClick={()=>{setWindowsState(state=>({...state,cli:true}))}}
         className="icon cli"><img src="/Doc-Icon/cli.svg" alt="" /></div>

        <div onClick={()=>{window.open('mailto:darshanwalher21@gmail.com',"_blank")}}
        className="icon mail"><img src="/Doc-Icon/mail.svg" alt="" /></div>

        <div 
          onClick={()=>{window.open('https://www.linkedin.com/in/darshan-walher-04367b28b',"_blank")}}
        className="icon link"><img src="/Doc-Icon/link.svg" alt="" /></div>


    </footer>
  )
}

export default Dock
