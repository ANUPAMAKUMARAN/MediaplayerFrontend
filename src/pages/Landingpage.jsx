import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
   <>
   <Container className='mt-5'>
    <Row >
      <Col sm={12} md={6}>
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni modi perspiciatis quo, vero deserunt beatae provident qui iste ut corrupti consequatur veritatis sint eligendi facilis nemo pariatur ex ullam fuga?</p>
      <Link to={'/home'}><button className='btn btn-warning mt-5'>Get started</button></Link>
      </Col>

      <Col sm={12} md={6} >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/482/811/small_2x/sound-bar-animation-background-free-video.jpg" alt='no image' className='w-75'/>
      </Col>
      
    </Row>
   </Container>

   <div className='container-fluid mt-5'>
    <div className='row mt-5'>
      <div className='col-md-2'></div>
      <div className='col-md-8'>
        <h1 className='text-center'>Features</h1>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <Card style={{ width: '100%' }} className='p-3'>
             <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" className='w-100' height=  {'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4'>
          <Card style={{ width: '100%' }} className='p-3'>
             <Card.Img variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" className='w-100' height=  {'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
            
          </div>
          <div className='col-md-4'>
          <Card style={{ width: '100%' }} className='p-3'>
             <Card.Img variant="top" src="https://i.makeagif.com/media/3-14-2016/5nhdW_.gif" className='w-100' height=  {'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
      <div className='col-md-2'></div>
    </div>
   </div>

   <Container className='mt-5 p-5' style={{border:'1px solid'}}>
      <Row>
      <Col sm={12} md={6}>
      <h3 className='text-warning'>Simple Fast and Powerful</h3>
      <p style={{textAlign:'justify'}}><span style={{fontSize:'35px'}}>Play everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum alias numquam atque distinctio voluptates illo exercitationem quibusdam dolor. Nostrum voluptates veritatis minima commodi expedita hic quo beatae saepe, magnam dolorem.</p>
      <p style={{textAlign:'justify'}}><span style={{fontSize:'35px'}}>Play everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum alias numquam atque distinctio voluptates illo exercitationem quibusdam dolor. Nostrum voluptates veritatis minima commodi expedita hic quo beatae saepe, magnam dolorem.</p>
      <p style={{textAlign:'justify'}}><span style={{fontSize:'35px'}}>Play everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum alias numquam atque distinctio voluptates illo exercitationem quibusdam dolor. Nostrum voluptates veritatis minima commodi expedita hic quo beatae saepe, magnam dolorem.</p>
      </Col>
      <Col sm={12} md={6}>
      <iframe width="560" height="460" src="https://www.youtube.com/embed/roz9sXFkTuE?si=f-ugTR-rvvAjvq9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Col>
      </Row>
    </Container>

    

   </>
  )
}

export default Landingpage