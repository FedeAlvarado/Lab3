import React from 'react'
import Beer from './Beer'

const Available = ({beerName,beerStyle,price,available}) => {
    if (available){

        return <Beer 
        beerName={beerName}
        beerStyle={beerStyle}
        price={price}
        /> 
    }


    
  
}

export default Available