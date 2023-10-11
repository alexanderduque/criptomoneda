import styled from '@emotion/styled'
import ImagenFondo from './img/cripto8.webp'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import { useState, useEffect } from 'react'





const Contenedor= styled.div`
max-width: 900px;
margin: 0 auto;
width: 90%;
@media (min-width: 922px){

  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2rem;
}

`

const Imagen = styled.img`
max-width: 480px;
margin: 60px 100px 0 auto;
width: 100%;

display: block;
border-radius: 20px;
opacity: 0.8;

@media (max-width: 600px) {
    /* Estilos específicos para pantallas de 600px o menos */
    max-width: 400px;
    
    margin: 30px auto 0 auto;
  }

`

const Heading= styled.h1`

 font-family: 'lato', sans-serif;
 color: white;
 text-align: center;
 font-weight: 700;
 margin-top: 50px;
 margin-bottom: 50px;
 font-size: 34px;

 
 `


function App() {

  //State del componente
  const [monedas,setMonedas] = useState({})
  const[resultado,setResultado]= useState({}) 
  const [cargando,setCargando] = useState(false)

  useEffect(()=>{

    //object.keys porque es un objeto
    if(Object.keys(monedas).length>0){
    
      setResultado({}); //REINICIANDO STATE DE RESULTADO
  const cotizarCriptos = async()=>{
      setCargando(true)

      const {moneda, criptomoneda} = monedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    
      const respuesta= await fetch(url)
      const resultado= await respuesta.json()
      console.log(resultado)

      setTimeout(() => {
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);

       

      }, 3000); // 3000 milisegundos (3 segundos)
    };

    cotizarCriptos();
    

    }

  }, [monedas])

  return (
    

<Contenedor>
      
      <Imagen
      
      src={ImagenFondo}
      alt='imagen de criptomonedas'
      />
      <div>
      <Heading>Cotiza Tu Criptomoneda En Linea</Heading>

      <Formulario

      /*llenamos el state de setMonedas con datos extraidos
      Del formulario*/

      setMonedas= {setMonedas}   
      
      />

      {cargando&& <Spinner/>}

      {resultado.PRICE && <Resultado resultado= {resultado}/> }

  
      </div>
    
    </Contenedor>
  )
}

export default App
