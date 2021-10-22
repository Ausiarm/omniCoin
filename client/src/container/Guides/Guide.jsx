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
            <Card key={idx} id='guide__card__container'>
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
            <Container fluid='lg' style={{ padding: '2rem 0'}}>
                <Row>
                    {mapped}
                </Row>
            </Container>
        </div>
    )
}

export default Guide
