import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'

function Watchhistory() {
  const [allHistoryVideo, setAllHistoryVideo]= useState([])
  const [deleteStatus, setDeleteStatus]= useState({})
  

    const getallvideo = async()=>{
    const result= await getAllVideoHistoryApi()
    setAllHistoryVideo(result.data);
    
  }
  console.log(allHistoryVideo);

  const handleDelete =async(id)=>{
    const result= await deleteHistoryVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }
    else{
      toast.error(`something went wrong`)
    }
  }
  

  useEffect(()=>{
    getallvideo()

  },[deleteStatus])
  return (
   <>
    <div className='d-flex justify-content-between px-5 mt-5'>
     <h5>Watch history</h5>
    <Link to={'/home '} style={{textDecoration:'none'}}><h5><FontAwesomeIcon icon={faHouse} style={{color: "#74C0FC",}} className='me-2' /><span className='d-md-inline d-none'>Back Home</span></h5></Link>
    </div>

   {allHistoryVideo?.length>0 ?
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10 table-responsive'>
          <table className='table table-bordered mt-5'>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>caption</th>
                <th className='text-center'>Url</th>
                <th className='text-center'>Time stamp</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
             { allHistoryVideo?.map((item, index)=>(
              <tr>
              <td className='text-center'>{index+1}</td>
              <td className='text-center'>{item?.caption}</td>
              <td className='text-center'><Link to={item.url} target='_blank'>{item?.url}</Link></td>
              <td className='text-center'>{item?.timeStamp}</td>
              <td className='text-center'>
               <button onClick={(()=>handleDelete(item?.id))} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} style={{color: "#74C0FC",}} /></button>
              </td>
           </tr>

             ))}
            </tbody>
          </table>
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
    : 
    <h4>no watching history</h4>} 
   
   </>
  )
}

export default Watchhistory 