import PropTypes from 'prop-types';

const Beer =({beerName,beerStyle,price}) =>{
            return(
            <div>
                <h3>Nombre: {beerName}</h3>
                <h3>Estilo:{beerStyle}</h3>
                <h3>Precio: {price*1000}</h3>
                <hr />
            
            </div>
            );
    
}
Beer.PropTypes = {
    
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    };
export default Beer