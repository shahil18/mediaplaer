import React ,{ useState } from 'react'
import { Button, FormLabel } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Categories() {
 const [category,setCategory]=useState({
  name:'',videos:[]
 });

 const[addStatus,setAddStatus]=useState({})

 const [show, setShow]=useState(false);

 const getCategory=(val)=>{
     if(val){
      setCategory({...category,name:val})
     }
 }

 const handleAdd=async()=>{
  console.log(category)
  if(category.name){
   const res=await addCategory(category)
   if(res.status>=200 && res.status<300){
    toast.success("category added successfully")
    handleClose()
    setAddStatus(res.data)
   }
   else{
    toast.error("category added failed")
   }
  }
  else{
    toast.info("enter valid data")
  }
 }

 const handleClose=()=> {
  setShow(false)
  setCategory({
    name:'',videos:[]
  })
};
 const handleShow = () =>setShow(true);

  return (
    <>
    <div className='d-grid'>
    <Button variant="primary" onClick={handleShow} >Add category</Button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>add categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
          <Form.Group className="mb-3" controlId="exampleform.controlInput1">
            <Form.Label>category</Form.Label>
            <Form.Control onChange={(e)=>{getCategory(e.target.value)}} type="text" placeholder="eg:romantic" />     
             </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>save</Button>
        </Modal.Footer>
      </Modal>
      <CategoryList status={addStatus}/>
    </>
  )
}

export default Categories