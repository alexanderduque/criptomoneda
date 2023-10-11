import styled from '@emotion/styled'
import Error from './Error'
import { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
background-color: rgba(13, 203, 35, 0.704);
border: none;
color: white;
width: 100%;
padding: 10px;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 10px;
margin-top: 25px;
transition: background-color .3s ease;

&:hover{
  background-color: rgba(6, 249, 34, 0.795);
    cursor: pointer;
}

@media (max-width: 600px ) {

  background-color: rgba(6, 249, 34, 0.521);
  
}

`

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([]) // estado del componente
  const [error, setError] = useState(false)

  // CREO MI HOOK PARA USARLO EN DIFERENTES COMPONENTES
  const [moneda, SelectMonedas] = useSelectMonedas('Elige Tu Moneda', monedas)

  //REUTILIZO EL HOOK PARA LAS CRIPTOMONEDAS
  const [criptomoneda, SelecCripto] = useSelectMonedas('Elige Tu Criptomoneda', criptos)


  //Consulta a la API de criptomonedas
  useEffect(() => {

    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
   
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      //.map nos crear un array nuevo
      const arrayCriptos = resultado.Data.map(cripto => {

        const objetoCripto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName

        }

        return objetoCripto

      })
      setCriptos(arrayCriptos)  /*encapsular el arreglo arrayCriptos en la funcion

    modificadora setCriptos del state*/


    }
    consultarApi();
  }, []) //solo se ejecutara una ves [] luego de que el Dom este completado o montado


  //funcion para manejar el envio del formulario
  const handleSubmit = e => {   

    e.preventDefault()

    //nos traemos el state de ambas
    if ([moneda, criptomoneda].includes('')) {

      setError(true)

      return

    }

    setError(false)

    setMonedas({
      moneda,
      criptomoneda

    })

  }



  return (

    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form

        onSubmit={handleSubmit}  //maneja el envio mediante una funcion
      >

        <SelectMonedas />

        <SelecCripto />

        <InputSubmit
          type="submit"
          value="Cotizar"
        />

      </form>
    </>
  )
}

export default Formulario
