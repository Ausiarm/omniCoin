import React from 'react'
//import currencies from '../supported-currencies'
import { SelectContainer, SelectHeading } from './StyledComponents'

const CoinSelector = ({ coinList,coin, handleCoinChange }) => {
  
  return (
    <SelectContainer >
          <SelectHeading className="m-5">Select your Coin</SelectHeading>
          <select value ={coin} onChange={(event) => handleCoinChange(event.target.value)}>
          {coinList.map((obj,index) => {
            return <option key = {`${index}-${obj.id}`} value ={obj.id}>{obj.id}</option>
          })}
          </select>
    </SelectContainer>
  )
}

export default CoinSelector