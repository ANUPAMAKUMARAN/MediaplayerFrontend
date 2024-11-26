import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';


import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddstatus}) {
    const [show, setShow] = useState(false);
    
    const [VideoDetails , setVideoDetails] =useState({
      caption:"",
      imageurl:"",
      embededlink:""
    })
    console.log(VideoDetails);
    

    const handleClose = () => {setShow(false); 
      handleCancel()
    } 
    const handleShow = () => setShow(true);

    const handleCancel=()=>{
      setVideoDetails({
        caption:"",
        imageurl:"",
        embededlink:""
      })
    }

    const handleAdd =async()=>{
      const {caption , imageurl , embededlink}=VideoDetails

      if(!caption || !imageurl || !embededlink){

        toast.info('please fill the form completely')

      }
      else{
        
        
        if(embededlink.startsWith('https://youtu.be/')){
          // https://youtu.be/R0OD5F-WO9A?si=Jx3dSwOrSeFllpIa
          let link = `https://www.youtube.com/embed/${embededlink.slice(17,28)}`
          console.log(link);
          const result = await addVideoApi({caption , imageurl , embededlink})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video added succesfully')
            handleClose()
            setAddstatus(result)
          }
          else{
            toast.error('Something went wrong')
            handleCancel()
          }
          
          
        }
        else{
          // https://www.youtube.com/watch?v=R0OD5F-WO9A
          let link= `https://www.youtube.com/embed/${embededlink.slice(-11)}`
          console.log(link); 
          const result = await addVideoApi({caption , imageurl , embededlink: link}) 
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video added succesfully')
            handleClose()
            setAddstatus(result)
          }
          else{
            toast.error('Something went wrong')
            handleCancel()
            
          }
                  
        }





        // const result = await addVideoApi(VideoDetails)
        // console.log(result);
        
       
      }
    }
    


  return (
    <>
    <h5><span className='d-md-inline d-none'>Upload new video</span> <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} style={{color: "#FFD43B",}} className='me-3'/></h5>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h7>Please fill the following details</h7>
           <form className='border border-secondary p-3 rounded'>
             <div className='mb-3'>
                <input type='text' placeholder='Videocaption' className='form-control' onChange={(e)=>setVideoDetails({...VideoDetails , caption:e.target.value})} />
             </div>
             <div className='mb-3'>
             <input type='text' placeholder='Video image' className='form-control' onChange={(e)=>setVideoDetails({...VideoDetails , imageurl:e.target.value})} />
             </div>
             <div className='mb-3'>
             <input type='text' placeholder='Video url' className='form-control' onChange={(e)=>setVideoDetails({...VideoDetails , embededlink:e.target.value})} />
             </div>

           </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position='top-center'theme="colored" autoClose={2000}/>
    
    </>
  )
}

export default Add