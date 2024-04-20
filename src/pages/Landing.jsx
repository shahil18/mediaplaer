import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div>
        <div className='w-100 d-flex justif-content-center align-items-center bg-secondary' style={{ height: '80vh' }}>
          <div className='row p-5 shadow'>
            <div className='col d-flex flex-column justify-content-center align-items-center'>
              <h1>MEDIA PLAYER 2024</h1>
              <p>video player is hardware or software that allows for the playback of video. In the past, most video players were hardware based, like the BetaMax pictured above, but today, most video players are software based, running on phones, browsers, or computers to play back video content.</p>
              <div>
                <Link to={'./dash'} className='btn btn-dark' > Explore <i class="fa-brands fa-joget fa-beat-fade "></i></Link>
              </div>

            </div>
            <div className='col' >
              <img src="https://th.bing.com/th/id/OIP.BDX_q1D8osxh1FbAdp3T5QHaER?rs=1&pid=ImgDetMain" className='img-fluid shadow  m-5' alt="" />

            </div>
          </div>
        </div>
        <div className='mt-3 p-5'>
          <h2>FEATURES</h2>
          <div className='d-flex mt-2 flex-row justify-content-between'>
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://cdn.dribbble.com/users/26599/screenshots/1293038/youtube-encoding.gif" style={{ height: '250px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">UPLOAD VIDEO</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               
                <Link to={'/dash'}> <a href="" className="btn btn-primary">UPLOAD VIDEO</a></Link>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://media2.giphy.com/media/4Ev0Ari2Nd9io/200w.gif" style={{ height: '250px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">WATCH VIDEOS</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={'/dash'}> <a href="" className="btn btn-primary">WATCH  VIDEO</a></Link>                
                
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src="https://styles.redditmedia.com/t5_2tsps/styles/communityIcon_ier1rv7cqo2c1.png" style={{ height: '250px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">WATCH HISTORY</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={'/his'}> <a href="" className="btn btn-primary">WATCH HISTORY</a></Link>              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
          <div className='col'>
            <h2>Simple,fast& secured</h2>
            <p style={{ textAlign: "justify" }}>media player is a platform for simple and faster youtube video uploading and management
              video watch history too where you get a simple video player interface with the app itself...</p>

          </div>
          <div className='col'>
            <iframe width="679" height="382" src="https://www.youtube.com/embed/fCVm5U2ob8U" title="12K HDR Video ULTRA HD 240 FPS Dolby Vision - Dolby Atmos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
        </div>
      </div>


    </>
  )
}

export default Landing