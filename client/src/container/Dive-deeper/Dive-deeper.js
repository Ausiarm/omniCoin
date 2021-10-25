import React from 'react'
import CustomModal from '../CustomModal/CustomModal'
import { Button } from 'react-bootstrap'
import { Heading , Li, DiveBox} from '../StyledComponents';

export default function DiveDeeper() {

  const videoContent = (<><iframe className="p-1" width="150" height="100" src="https://www.youtube.com/embed/YpjRMqKOzLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="p-1" width="150" height="100" src="https://www.youtube.com/embed/YpjRMqKOzLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="p-1" width="150" height="100" src="https://www.youtube.com/embed/YpjRMqKOzLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="p-1" width="150" height="100" src="https://www.youtube.com/embed/YpjRMqKOzLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></>)
  const moviesContent = (<>
    <Button className="m-2" variant="info"><a href="https://www.primevideo.com/detail/0PI0543IDXS8LDNIH6HCUAXJIJ/ref=atv_dp_share_mv" alt="
Cryptopia" target="_blank">
      Cryptopia</a></Button>
    <Button className="m-2" variant="info"><a href="https://www.primevideo.com/detail/0PI0543IDXS8LDNIH6HCUAXJIJ/ref=atv_dp_share_mv" alt="
Cryptopia" target="_blank">
      Cryptopia</a></Button>
    <Button className="m-2" variant="info"><a href="https://www.primevideo.com/detail/0PI0543IDXS8LDNIH6HCUAXJIJ/ref=atv_dp_share_mv" alt="
Cryptopia" target="_blank">
      Cryptopia</a></Button>
    <Button className="m-2" variant="info"><a href="https://www.primevideo.com/detail/0PI0543IDXS8LDNIH6HCUAXJIJ/ref=atv_dp_share_mv" alt="
Cryptopia" target="_blank">
Cryptopia</a></Button>
  </>)
    
  const booksContent = (<><Button className="m-2" variant="info"><a href="https://www.amazon.com.br/Bitcoin-Red-Pill-Renascimento-Tecnol%C3%B3gico-ebook/dp/B08KGQ8P65/ref=cm_cr_arp_d_product_top?ie=UTF8" alt="
Bitcoin Red Pill" target="_blank">
    Bitcoin Red Pill</a></Button>
    <Button className="m-2" variant="info"><a href="https://www.amazon.com.br/Bitcoin-Red-Pill-Renascimento-Tecnol%C3%B3gico-ebook/dp/B08KGQ8P65/ref=cm_cr_arp_d_product_top?ie=UTF8" alt="
Bitcoin Red Pill" target="_blank">
      Bitcoin Red Pill</a></Button>
    <Button className="m-2" variant="info"><a href="https://www.amazon.com.br/Bitcoin-Red-Pill-Renascimento-Tecnol%C3%B3gico-ebook/dp/B08KGQ8P65/ref=cm_cr_arp_d_product_top?ie=UTF8" alt="
Bitcoin Red Pill" target="_blank">
      Bitcoin Red Pill</a></Button>
    <Button className="m-2" variant="info"><a href="https://www.amazon.com.br/Bitcoin-Red-Pill-Renascimento-Tecnol%C3%B3gico-ebook/dp/B08KGQ8P65/ref=cm_cr_arp_d_product_top?ie=UTF8" alt="
Bitcoin Red Pill" target="_blank">
Bitcoin Red Pill</a></Button>
    
  </>)

      
  
  return (
    <div>
      <Heading className="m-5 text-center">Dive Deeper</Heading>
      <DiveBox className="d-flex m-auto justify-content-around">
        <Li ><CustomModal content={videoContent} itemName='Videos' /></Li>
        <Li ><CustomModal content={moviesContent} itemName='Movies' /></Li>
        <Li ><CustomModal content={booksContent} itemName='Books'/></Li>
        <Li ><CustomModal itemName='Podcast' /></Li>
        <Li ><CustomModal itemName='Humor'/></Li>
      </DiveBox>
    </div>
  )
}
