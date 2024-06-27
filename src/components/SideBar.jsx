import { FaListUl } from "react-icons/fa6";
import {createQueryObject} from "../helpers/helper"

function SideBar({setQuery}) {
    const categoryHandler=(event)=>{
        const {tagName}=event.target;
        const category=event.target.innerText.toLocaleLowerCase();
        if (tagName!=="LI") return ;
         setQuery((query)=>createQueryObject(query,{category})
         )  
      }
  return (
    <div>
        <div>
          <FaListUl/>
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>jewelery</li>
          <li>Men's Clothing</li>
          <li>women's Clothing</li>
        </ul>
      </div>
  )
}

export default SideBar