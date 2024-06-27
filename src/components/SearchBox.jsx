import { ImSearch } from "react-icons/im";
import {createQueryObject} from "../helpers/helper"

function SearchBox({search,setQuery,setSearch}) {
    const searchHandler=()=>{
        setQuery((query)=>createQueryObject(query,{search}))
      }
    
  return (
    <div>
      <input type="text" placeholder="...Search" value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase().trim())}/>
      <button onClick={searchHandler}><ImSearch/></button>
    </div>
  )
}

export default SearchBox