import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Categoryy from '../components/Categoryy'

function Home() {
  const [addstatus , setAddstatus] =useState({})
  const [categoryVds ,setCategoryVds]= useState([])
  return (
     <>

       <div className='container d-flex justify-content-between mt-5'>
        <Add  setAddstatus={ setAddstatus}/>
        <Link to={'/watchhistory'} style={{textDecoration:'none'}} ><h5><span className='d-md-inline d-none'>Watch history </span> <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "yellow",}} className='me-2'/></h5></Link>
       </div>

        <div className='container-fluid p-4'>
          <div className='row'>
             <div className='col-md-9'>
              <Allvideos addstatus={addstatus} setCategoryVds={setCategoryVds}/>

             </div>
             <div className='col-md-3'>
              <Categoryy categoryVds={categoryVds}/>
             </div>
        
          </div>
        </div>
     </>
  )
}

export default Home