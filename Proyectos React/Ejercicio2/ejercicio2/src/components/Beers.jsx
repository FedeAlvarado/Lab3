import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'



const Beers = () => {

  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  return (

    <div >
      {beers.map((beer) => (
        <Row>
          <Col md={6}>
          <Card style={{ width: '18rem' }}       className='mb-2'
          bg={"danger"}
          border={"info"}>
          <Card.Body>
            <Card.Title>{beer.beerName}</Card.Title>
            <Card.Subtitle>{beer.beerStyle}</Card.Subtitle>
            <Card.Text>${beer.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
         </Row>

      ))}
    </div>

  )
}

export default Beers
