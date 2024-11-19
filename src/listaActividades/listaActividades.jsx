import './styles.css';
import Completa from '../assets/completo.png';
import Incompleta from '../assets/incompleto.png';
import PropTypes from 'prop-types';

function FncLista(props) {
  return(
        <div
          /*key={value.indice}*/          
          className='divLateral'
          onClick={()=>{props.viewDetail(props.data)}}
        >
          <div className='divImg'>
            <img src={props.data.estatus?Completa:Incompleta} className='imagenList'/>
          </div>
          <div>
            <p  style={{margin: 0}}>{props.data.titulo}</p>
            <p  style={{margin: 0}}>{props.data.actividad}</p>
            <p  style={{margin: 0}}>{props.data.fecha}</p>
          </div>
        </div>
        
    );
  }

FncLista.propTypes= {
  data: PropTypes.object.isRequired,
  viewDetail: PropTypes.func.isRequired,
};

export default FncLista;