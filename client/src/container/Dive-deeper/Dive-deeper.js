import React from 'react'
import CustomModal from '../CustomModal/CustomModal'
import { Heading, Li, DiveBox } from '../StyledComponents';
import {videosContent, moviesContent,booksContent,podcastsContent,humorContent} from '../../utils/diveDeepData'

export default function DiveDeeper() {
  
  return (
    <div>
      <Heading className="m-5 text-center">Dive Deeper</Heading>
      <DiveBox className="d-flex m-auto justify-content-around">
        <Li ><CustomModal content={videosContent} itemName='Videos' /></Li>
        <Li ><CustomModal content={moviesContent} itemName='Movies' /></Li>
        <Li ><CustomModal content={booksContent} itemName='Books'/></Li>
        <Li ><CustomModal content={podcastsContent} itemName='Podcast' /></Li>
        <Li ><CustomModal content={humorContent} itemName='Humor'/></Li>
      </DiveBox>
    </div>
  )
}
