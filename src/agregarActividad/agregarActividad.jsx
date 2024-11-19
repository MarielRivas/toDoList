import { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

function FncAgregarAct(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateAct, setDateAct] = useState('');

  const handleAdd = () => {
    let nuevo = {
      "indice":props.dato.length + 1,
      "titulo": title,
      "actividad": description,
      "estatus": false,
      "fecha": dateAct
    };

    const nuevasActs=[...props.dato, nuevo];
    props.agregar(nuevasActs);

    setTitle('');
    setDescription('');
    setDateAct('');
  };
  
    return(
      <div className='sectionForm'>
        <div>
          <label htmlFor='titulo'>Titulo: </label>
          <input 
          id="titulo" 
          type="text" 
          placeholder="Título de la actividad" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='actividad'>Actividad: </label>
          <input 
          id='actividad' 
          type="text" 
          placeholder="Descripción de la actividad" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='fecha'>Fecha: </label>
          <input 
          id="fecha" 
          type="date" 
          value={dateAct}
          onChange={(e) => setDateAct(e.target.value)}/>
        </div>
  
        <button className='botonForm' onClick={handleAdd}>Agregar</button>
        
      </div>
    );
}

FncAgregarAct.propTypes = {
  dato: PropTypes.array.isRequired,
  agregar: PropTypes.func.isRequired,
};

export default FncAgregarAct;