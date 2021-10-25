import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ThumbnailBox from '../ThumbnailBox/ThumbnailBox'

export default function CustomModal({itemName,content}) {
  const [show, setShow] = useState(false);
  return (
    <div >
       <div variant="primary" onClick={() => setShow(true)}>
        {itemName}
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        dialogClassName="bg-dark"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {itemName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ThumbnailBox content={content}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}
