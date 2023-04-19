import { useSelector, connect } from "react-redux";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import './Favorites.css';
import { addFav, removeFav } from "../../redux/actions";


function Favorites({myFavorites, onClose}) { 
    function closeFavorite(id){
        onClose(id)
       // removeFavorite(id)
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.add('body-container');
    
        return () => {
          body.classList.remove('body-container');
        }
      }, []);
    
    
    return (
        
        <div className="favorite">
            {myFavorites &&
            myFavorites.map((element, index ) => {
                return (
                <Card
                id={element.id}
                name={element.name}
                species={element.species}
                gender={element.gender}
                image={element.image}
                onClose={()=> closeFavorite(element.id)}
                />
            );
         })} 
            </div>
    );
}



export function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites,
    };
}

export function mapDispatchToProps(dispatch) {
    return{
        removeFavorite: (id) => dispatch(removeFav(id))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorites);
