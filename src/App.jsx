/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './App.css'
import Lista from './components/lista/Lista';

function App() {
  const server = "http://localhost:8080";
  const [users, setUsers] = useState({});

  useEffect(()=>{


    const fetchList = async () =>{
      const url = `${server}/api/users`
      try {
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        setUsers(data.users)

      } catch (error) {
        console.log(error)
      }

    };
    fetchList();


  },[])

  return (
    <>
     <div className='main__Tabla'>
     <div className='Tabla__users'>
        <h2>Lista de Usuarios</h2>

     </div>

    <div className='Tabla_Users-tabla'>
      <table >
      <thead>

            <tr>
                <th><h2> Id_Usurio</h2></th>
                <th><h2> Nombre</h2></th>
                <th><h2> Apellido</h2></th>
                <th><h2> email</h2></th>
                <th></th>
            </tr>
      </thead>

       <tbody>


            {
            (Array.isArray(users))
            ?(users.map((user,index) => {
              return  <tr><Lista key={index} user={user}/></tr>;

              })):
              console.log("La variable users no es un array.")
              }
      </tbody>

        </table>
        </div>

    </div>



    </>
  )
}

export default App
