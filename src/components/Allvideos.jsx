import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

function Allvideos({ addstatus, setCategoryVds}) {

    const [video ,setVideo]= useState([])
    const [deleteStatus ,setdeleteStatus]= useState([])
   

    const getallVideo=async()=>{
        const result =await getVideoApi()
        // console.log(result);
        setVideo(result.data)
        
    }
    console.log(video);

    const dragOver=(e)=>{
        e.preventDefault()
    }

    const videoDrop= async(e)=>{
        const {videoDetails, categoryDetails}=JSON.parse(e.dataTransfer.getData("Details"))
        console.log(videoDetails, categoryDetails);

        let result=categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)

        const reqBody={
            category:categoryDetails.category,
            allVideos:result,
            id:categoryDetails.id
        }

        const response=await updateCategoryApi(categoryDetails.id, reqBody)
        console.log(response);
        if(response.status>=200 && response.status<300){
            setCategoryVds(result)
        }
        
        
    }
    

    useEffect(()=>{
        getallVideo()
    }, [ addstatus,deleteStatus])
  return (
    <>
    <h5 className='mt-5'>All Videos</h5>

   {video?.length>0?
    <div className='container-fluid mt-5'droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)} >
        <div className='row'>
          
           { video?.map((item)=>(
             <div className='col-md-3 p-3'>
             <Videocard videoDetails={item} setdeleteStatus={setdeleteStatus}/>
             </div>

           ))
           }
            
        </div>
    </div>

           :
    <div className='container-fluid mt-5'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18j6DMZ0rian4IpMVY1DZ9SQuenyL3-kqpEUPLBkR0Ay0Te7QFo9TUB-jznTEz5Jp3N4&usqp=CAU" alt='no image' className='w-100'/>
                <h6 className='text-center text-danger'>No Video added yet........</h6>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>}
    
    </>
  )
}

export default Allvideos