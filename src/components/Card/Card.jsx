import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect, useDispatch }  from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import BackgroundImage from "../BackgroundImage/background"; // importa el componente BackgroundImage


function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites,}) {

 const [isFav, setIsFav] = useState(false);

 const handleFavorite = () => {
   if(isFav) { 
      setIsFav(false);
      removeFav(id);

   } else {
      setIsFav(true);
      addFav({id, name, species, gender, image});
   }
 };

 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      } 
   });
}, [myFavorites]);

   return (

       <div>
      <div className={style.container}>
      
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <img src={image} alt='' /> 
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
            {
   isFav ? (
      <button  onClick={handleFavorite}className={style.corazon}>❤️</button>
   ) : (
      <button onClick={handleFavorite}className={style.corazon} >🤍</button>
   )}
      </div>
      </div>
   ); 
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => {
         dispatch(addFav(id));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   };
};



export default connect(mapStateToProps, mapDispatchToProps)(Card);