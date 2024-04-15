import './App.css'
import Available from './components/Available';
import Beer from './components/Beer';


function App() {

  return (
    <div>

      <h1>TODAS LAS CERVEZAS QUE TENEMOS EN EL BAR</h1>
      {beers.map((beer) => ( 
        <Beer 
        key={beer.id}
        beerName={beer.beerName}
        beerStyle={beer.beerStyle}
        price={beer.price}
        />
      ))}
      <hr />
      <h1>CERVERZAS DISPONIBLES</h1>
      {beers.map((beer) => (
        <Available
        key={beer.id}
        beerName={beer.beerName}
        beerStyle={beer.beerStyle}
        price={beer.price}
        available={beer.available}
        
         
        />
      
      ))}
    </div>
  )
}

export default App
