import React,{useEffect,useState} from 'react'
import { getHistory } from '../services/allApis'


function History() {
  const[his,setHis]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData = async() =>{
    const res =await getHistory()
    console.log(res.data)
    setHis(res.data)
    StyleSheetList(res.data)
  } 
  return (
    <>
    <div className='p-5'>
      <h1>watch history</h1>
      <table className='table table-bordered'>
        <tr>
          <th>caption</th>
          <th>url</th>
          <th>date&time</th>
        </tr>
        {
        his?
        his.map(item=>(
          <tr>
            <td>{item.caption}</td>
            <td>{item.url}</td>
            <td>{item.datetime}</td>
            <td><i className="fa-solid fa-trash" ></i></td>
          </tr>
        ))
        :
        <tr>
          <p className='text-danger'>no watch history</p>
        </tr>
        }
      </table>


    </div>
    </>

  )
}

export default History