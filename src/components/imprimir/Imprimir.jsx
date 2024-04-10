import React from 'react'

const Imprimir = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("Funciono")

        };

  return (
    <>

    <button id ="Tabla-btn" type="submit" onClick={handleSubmit} >Imprimir</button>

    </>
  )
}

export default Imprimir
