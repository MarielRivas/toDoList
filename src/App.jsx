import { useState } from 'react';
import './App.css';
import FncAgregarAct from './agregarActividad/agregarActividad.jsx';
import FncMostrarAct from './mostrarActividad/mostrarActividad.jsx';
import FncLista from './listaActividades/listaActividades.jsx';
import Datos from './data/datos.json'

const App = ()=>{
  const blankData = {
    "indice":"", 
    "titulo":"",
    "actividad":"", 
    "estatus":false, 
    "fecha":""};
  const [data, setData] = useState(Datos);
  const [itemData, setItemData] = useState(blankData);

  const EstablecerValores = (nuevosValores)=>{
    setData(nuevosValores);
  };

  const handleClickMostrar = (value)=>{
    setItemData(value);
  };

  const handleClickUpdate = (value) => {
    const dataUpdate = data.map((item)=>{
      if (item.indice == value.indice){
        return{ ...item, ...value };
      }
      return item;
    });
    setItemData(value);
    setData(dataUpdate);
  };

  const dataRemoval = (value) => {
    const dataRemove = data.filter((item)=>item.indice != value.indice);
    setData(dataRemove);
    setItemData(blankData);
  };

  return(
    <div className='general'>
      <header className='header'>
          <h1>Actividades</h1>
      </header>
      <main className='main'>
        <section>
          <FncAgregarAct 
          dato={data} 
          agregar={EstablecerValores}/>
        </section>
        <FncMostrarAct
        changeActivity={handleClickUpdate}
        itemData={itemData}
        deleteActivity={dataRemoval}
        
        />
      </main>
      <aside className='lateral'>
        <h2 style={{display:"flex", justifyContent: "center"}}>Lista de actividades</h2>
        {data.map((value, index)=>
          <FncLista
          key={index}          
          id={value.id}
          data={value}
          viewDetail={handleClickMostrar}
          />)}
      </aside>
      {/*<FncAside
      datos={datos}
      EstablecerValores={EstablecerValores}
      />*/}
    </div>
  );
};
export default App;