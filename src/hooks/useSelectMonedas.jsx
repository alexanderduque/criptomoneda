import styled from '@emotion/styled'
import { useState } from 'react'



//ESTILOS CSS MEDIANTE IMPORTACION DE @EMOTION

//ESTILOS DEL LABEL
const Label = styled.label `

display: block;
color: white;
font-family: 'lato', sans-serif;
font-size: 24px;
font-weight: 700;
margin: 15px 0;

`
//ESTILOS DEL SELECT
const Select = styled.select`
width: 100%;
font-size: 18px;
padding: 14px;
border-radius: 10px;

`




const useSelectMonedas = (label, opciones) => {


// CREACION DE STATE EN EL SELECT DE MONEDAS

    const [state, setState] = useState ('')


  
 const SelectMonedas = () => (

        <>
            <Label>{label}</Label>
            <Select 
            value={state}
            onChange={e=> setState(e.target.value)} // cambia el valor de la pestaña del label
            
            >

            <option value="">Seleccione</option>

            {opciones.map ( opcion=> (

                <option
                key={opcion.id} // key obligatoria si no da error consola
                value={opcion.id}
                >{opcion.nombre}
                </option>

            ))}

            </Select>

        
        </>

 )

    return [state, SelectMonedas]
}

export default useSelectMonedas
