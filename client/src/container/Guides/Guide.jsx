import React, { useState } from 'react'
import './guide.css'
import guideData from '../../utils/guideData'
import Container  from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Image  from 'react-bootstrap/Image'
import Modal  from 'react-bootstrap/Modal'
import Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Guide() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({})

    // "string"

    function createModal(data){
        return(
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                arial-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {/* <p class="paragraph" data-aos="fade-up">Start investing!</p>
                <h2  class="h2" data-aos="fade-up">Guides</h2> */}
                {/* <div class="blogMenu">
                <div class="blog1" data-aos="fade-up">
                    <div class="image">
                    <img src=""></img>
                    </div>
                    <div class="blogDetails">
                    <div class="name">
                        <div class="nameDetails">
                        <h4>What is crypto?</h4>
                        <p>Article by - <span></span></p>
                        </div>
                        <div class="pro">
                        <p>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing</p>
                        
                        <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>  */}

                    <p>{data.summary}</p>
                    <Image src={data.image} style={{width:'200px'}}/>
                </Modal.Body>
                    <a id='guide__modal__link' href={data.link} target='blank' rel='noreferrer'>Go to site</a>
                <Modal.Footer>
                    <div>Technologies used:</div>
                    <p style={{ fontsize:'0.7 rem', marginRight: 'auto'}}>{data.technologies}</p>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const mapped = guideData.map((e, idx) => {
        return (

<Card className="col-5 m-5" key={idx} id='guide__card__container'>
                <Image className='guide__image'
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            technologies: e.technologies
                        })
                        setModalShow(true)
                    }}
                    src={e.image}/>   
                    <div className='guide__click__info'>&#x1F50E;&#xFE0E;</div>
                    {createModal(tempData)}
            </Card>
            
            
        )
    })

    return (
        <div className="portfolio__main__container" id="portfolio">
            <h1>Guides</h1>
            <p>Click on images below to learn about Crypto and Stokes!
            </p>
            <div className="container">
            <Container fluid='lg' style={{ padding: '5rem 0'}}>
            <div className="polaroid">
                <Row className="col-12 d-flex-wrap p-2"> 
                    {mapped}
                </Row>

                </div>
            </Container>
            </div>
        </div>
    )
}

export default Guide
