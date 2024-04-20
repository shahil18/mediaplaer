import React, { useEffect, useState } from 'react'
import { getCategories, deleteCategory,getSpecificVideo,updateCategory} from '../services/allApis'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function CategoryList({ status }) {
  const [cat, setCat] = useState([])
  const [delStatus, setDelStatus] = useState({})
  useEffect(() => {
    getCat()
  }, [status, delStatus])
  const getCat = async () => {
    const res = await getCategories()
    console.log(res.data)
    setCat(res.data)
  }
  const handleDrop=async(e,id)=>{
    // console.log("category id"+id)
    const vid=e.dataTransfer.getData("videoId")
    let category=cat.find(item=>item.id==id)
    const res=await getSpecificVideo(vid)
    category.videos.push(res.data)
    const rescat=await updateCategory(category,id)
    if(rescat.status>=200 && rescat.status<300){
      toast.success(`${res.data.caption} is added to ${category.name}`)
      getCat()
    }
    else {
      toast.error("video adding failed")
    }

  }
  const handleDragOver=(e)=>{
    e.preventDefault()
  }
  const handleDelete = async (id) => {
    const res = await deleteCategory(id)
    if (res.status >= 200 && res.status < 300) {
      toast.success("category deleted")
      setDelStatus(res)
    }
    else {
      toast.error("category deletion failed")
    }
  }

  return (
    <>
      <div className='border border-secondary p-3 mt-3'>

        {
          cat ?
            cat.map(item => (
              <div className='bg-light mb-3 p-3 rounded shadow'onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
                <div>
                <span> {item.name}</span>
                <i className="fa-solid fa-trash float-end" onClick={() => { handleDelete(item.id) }} style={{ color: '#a2a5a9' }}></i>
                </div>
                <div>
                  {
                    item?.videos.map(v=>(
                      <Videocard video={v} cat={true}/>
                    ))
                  }
                </div>
               
              </div>
            ))
            :
            <h1>no categories</h1>
        }

      </div>

    </>
  )
}

export default CategoryList