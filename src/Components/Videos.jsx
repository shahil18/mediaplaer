import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'

function Videos({addStatus}) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState({})


useEffect(()=>{
  getData()
},[addStatus,delStatus])

const getData=async()=>{
  const res=await getVideos()
  // console.log(res.data);
  setAllVideos(res.data)
}
  return (
    <div className='bg-light row border border-3 border-dark p-2 '>
     {
      allVideos?
      allVideos.map(item=>(
        <Videocard video={item} setDelStatus={setDelStatus}/>
      ))
      :
      <h1>no videos</h1>
     }
    </div>

  )
}

export default Videos