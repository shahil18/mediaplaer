import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div >
        <div className='w-100 d-flex flex-column justify-content-center bg-secondary '>
          <div className='row p-5'>
            <div className='col'>
              <h4>MEDIA PLAYER</h4>
              <p style={{ textAlign: 'justify' }}>THis media player  is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. mediaplayer is available for desktop operating systems and mobile platforms soon..</p>

            </div>
            <div className='col'>
              <h4 >Links</h4>
              <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}>Landing</Link> <br />
              <Link to={'/dash'} style={{ color: 'black', textDecoration: 'none' }}>Dashboard</Link> <br />
              <Link to={'/his'} style={{ color: 'black', textDecoration: 'none' }}>History</Link> <br />
            </div>
            <div className='col'>
              <h4>References</h4>
              <a href="https://getbootstrap.com/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}>Bootstrap</a> <br />
              <a href="https://react-bootstrap.github.io/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}>React-Bootstrap</a> <br />
              <a href="https://react.dev/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}>React</a>
            </div>
          </div>
          <div className='text-center'>
            <p> &copy; MEDIA PLAYER 2024</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer