import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <img className='m-2' src="https://e7.pngegg.com/pngimages/993/214/png-clipart-video-player-media-player-android-android-angle-triangle-thumbnail.png" height={'30px'} alt="" />
              {''}
            MEDIA PLAYER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header