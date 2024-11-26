import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='p-5'>
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4 mt-4 mt-md-0'>
       
          <h4 className='text-warning'> <FontAwesomeIcon icon={faVideo}  style={{color: "#e99607",}} className='me-3' />Media player</h4>
          <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dicta natus non fugiat, suscipit necessitatibus sint fuga nobis iure deleniti, veritatis beatae dignissimos expedita atque. Ad dignissimos commodi doloremque cumque.</p>
        </div>
        <div className='col-md-2 d-flex justify-content-center  mt-4 mt-md-0'>
          <div >
          <h4>Links</h4>
          <Link to={'/'}><p className='mt-3'>Landing page</p></Link>
          <Link to={'/home'}><p>Home Page</p></Link>
          <Link to={'/watchhistory'}><p>Watch history</p></Link>
           </div>
        </div>
       
        <div className='col-md-2 d-flex justify-content-center mt-4 mt-md-0'>
          <div>
            <h4>Guides</h4>
            <p className='mt-3'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className='col-md-4 px-5 mt-4 mt-md-0'>
          <h4>Contacts Us</h4>
          <div className='d-flex mt-3'>
            <input type='text'placeholder='email id' className='form-control'/>
            <button className='btn btn-warning ms-3'>subscribe</button>

          </div>
          <div className='d-flex justify-content-between mt-3'>
          <FontAwesomeIcon icon={faInstagram} style={{color: "#FFD43B",}} className='fa-2x' />
          <FontAwesomeIcon icon={faFacebook} style={{color: "#FFD43B",}} className='fa-2x'/>
          <FontAwesomeIcon icon={faTwitter} style={{color: "#FFD43B",}}  className='fa-2x'/>
          <FontAwesomeIcon icon={faLinkedin} style={{color: "#FFD43B",}}  className='fa-2x'/>
          <FontAwesomeIcon icon={faWhatsapp} style={{color: "#FFD43B",}}  className='fa-2x'/>
          </div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer