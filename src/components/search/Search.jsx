import  { useState ,useEffect} from 'react'
//const BASE_URL = import.meta.env.VITE_BACK_URL;
const url = `https://backpruebatecnica.onrender.com/api/`;

const SearchList = ({ onSearchResultChange }) => {
    const [search,setSearch]=useState(null)
    const [users, setUsers] = useState({});
    let result="";
    useEffect(()=>{
      const fetchList = async () =>{
        const $url = `${url}users`
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


    },[onSearchResultChange])
    const handleKeyUp = (event) => {
        //console.log(event)
        if (event.key === "Escape") {
            result = users;
            //console.log(result)
            }
        let {value} = event.target;
        setSearch(value)
        //console.log(event.target.value)


        //filtrado

       result = !search
       ? users
       : users.filter(user => (user.name.toLowerCase().includes(search.toLowerCase())) || (user.lastName.toLowerCase().includes(search.toLowerCase()))  )


        onSearchResultChange(result); // Pasar el resultado al otro componente
      };


/*     const handleChange = (event) => {

        let {value} = event.target;
        setSearch(value)
        //console.log(event.target.value)


        //filtrado

       result = !search
       ? users
       : users.filter(user => (user.name.toLowerCase().includes(search.toLowerCase())) || (user.lastName.toLowerCase().includes(search.toLowerCase()))  )


        onSearchResultChange(result); // Pasar el resultado al otro componente

    }; */
  return (
    <>
    <div className="filter">
    <input
    type="search"
    placeholder="Buscar..."
    name="search"
    className="filter"
    onKeyUp={handleKeyUp}

    />

    </div>
    </>
  )
}

export default SearchList
