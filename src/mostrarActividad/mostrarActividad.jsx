import './styles.css';
import Completa from '../assets/completo.png';
import Incompleta from '../assets/incompleto.png';
import PropTypes from 'prop-types';

function FncMostrarAct(props){
  const {indice, titulo, actividad, estatus, fecha} = props.itemData

    return(
      <section className='sectionInfo'>
        <h2>Detalle de la actividad</h2>
        <div>
          <h3>{props.itemData.titulo}</h3>
          <p>{props.itemData.actividad}</p>
          <p>{props.itemData.fecha}</p>
          <div style={{display:'flex', width:20, height:20, margin:5}}>
            <img src={props.itemData.estatus ? Completa : Incompleta} className='imagenList'></img>
          </div>
          <button className='botonForm' onClick={()=>{
            const newData={indice,titulo,actividad, fecha, estatus:!estatus };
            props.changeActivity(newData)}}>Cambiar estado</button>

          <button className='botonForm' onClick={()=>{
            props.deleteActivity(props.itemData)
          }}
            >Eliminar</button>  
        </div>
      </section>
    );
};

FncMostrarAct.propTypes = {
  changeActivity: PropTypes.func.isRequired,
  itemData: PropTypes.object.isRequired,
  deleteActivity: PropTypes.func.isRequired,
  
};  

export default FncMostrarAct; 