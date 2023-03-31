import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar( {onSearch} ) {

   const [id, characters] = useState("");
   
   const handleChange= (event) => {
      characters(event.target.value);
};

   return (
      <div className={style.bar}>
         <input
          type='search' 
          className={style.searchInput} 
          onChange={handleChange} 
          placeholder="Introducir personaje mediante el id"
          />
         <button className={style.searchButton} onClick= {() => {onSearch(id)}}>
          Agregar
         </button>
  </div>
   );
}
