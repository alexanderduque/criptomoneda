import styled from "@emotion/styled"


const Resultado = ({ resultado }) => {

  const Contenedor = styled.div`
    color: white;
    font-family: 'lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;

    `

  const Imagen = styled.img`
    
    display: block;
    width: 120px;
    

    `

  const Texto = styled.p`
    font-size: 17px;
   span{font-weight:700}

    `

  const Precio = styled.p`
    font-size: 22px;
    text-align: center;
   span{
    
    color: #02fb02
    
}

   `

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen de criptomoneda"
      />
      <div>

        <Precio>EL PRECIO ES DE : <br /> <hr /> <span>{PRICE}</span></Precio>
        <Texto>PRECIO MAS ALTO DEL DIA: <span>{HIGHDAY}<hr /></span></Texto>
        <Texto>PRECIO MAS BAJO DEL DIA: <span>{LOWDAY}<hr /></span></Texto>
        <Texto>VARIACION DE ULTIMAS 24 HORAS: <span>{CHANGEPCT24HOUR}<hr /></span></Texto>
        <Texto>ULTIMA ACTUALIZACION: <span>{LASTUPDATE}<hr /></span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado
