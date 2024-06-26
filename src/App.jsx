/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
//const BASE_URL = import.meta.env.VITE_BACK_URL;
const url = `https://backpruebatecnica.onrender.com/api/`;
import Lista from './components/lista/Lista';
import Imprimir from './components/imprimir/Imprimir';
import SearchList from './components/search/Search';
import ListaPDF from './components/pdf/ListaPdf';

function App() {

  const [users, setUsers] = useState({});
  useEffect(()=>{
    const fetchList = async () =>{
      const $url = `${url}users`
      console.log($url)
      try {
        const response = await fetch($url)
        const data = await response.json()
        //console.log(data)
        setUsers(data.users)

      } catch (error) {
        console.log(error)
      }

    };
    fetchList();


  },[])

  const handleSearchResultChange = (result) => {
    setUsers(result);
  };

  return (
    <>
     <div className='main__Tabla'>
     <div className='Tabla__users'>
        <h2>Lista de Usuarios</h2>

     </div>
     <hr />
     <SearchList onSearchResultChange ={handleSearchResultChange}/>

     <hr />

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
              return  <tr key ={index}><Lista key={index} user={user}/></tr>;

              })):
              console.log("La variable users no es un array.")
              }
      </tbody>

        </table>

        </div>
        <div className="Tabla_Imprimir">
        <ListaPDF users = {users}/>
        <Imprimir/>
        </div>

    </div>



    </>
  )
}

export default App
