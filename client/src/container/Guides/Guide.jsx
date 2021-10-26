import React, { useState } from 'react'
import './guide.css'
import guideData from '../../utils/guideData'
import Row  from 'react-bootstrap/Row'
import Image  from 'react-bootstrap/Image'
import Modal  from 'react-bootstrap/Modal'
import Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Heading ,Text, Container} from '../StyledComponents';

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
                <Modal.Body  className="p-5">
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
                    <a className="text-center py-3" href={data.link} target='blank' rel='noreferrer'>Go to site</a>
                <Modal.Footer>
                    <div>Keywords:</div>
                    <p style={{ fontsize:'0.7 rem', marginRight: 'auto'}}>{data.keywords}</p>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const mapped = guideData.map((e, idx) => {
        return (

<Card className="col-3 m-4" key={idx} id='guide__card__container'><Heading className=" m-3">{e.title}</Heading>
                <Image className='guide__image'
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            keywords: e.Keywords
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
        <div >
            <Heading >Guides</Heading>
            <Text className="my-5">Click on images below to learn about Crypto and Stocks!</Text>
            {/* <div className="rounded"> */}
            <Container>
            <div className="polaroid">
                <Row className="col-12 d-flex-wrap justify-content-around m-auto text-center p-2"> 
                    {mapped}
                </Row>

                </div>
            </Container>
            {/* </div> */}
        </div>
    )
}

export default Guide
