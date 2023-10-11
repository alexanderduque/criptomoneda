import styled from '@emotion/styled'


const Texto = styled.div`  //se inicia el nombre de la variable en mayuscula en style-components

background-color: red;
color: white;
padding: 15px;
font-size: 22px;
text-transform: uppercase;
font-family: 'lato'sans-serif;
font-weight: 700;
text-align: center;

`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
