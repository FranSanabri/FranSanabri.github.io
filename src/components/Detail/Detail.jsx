import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Detail.css';

const Detail = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(()=> {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) =>setCharacter(response.data))
    }, []);

    useEffect(() => {
        // Agrega la clase CSS al body
        document.body.classList.add('background-image');
        // Remueve la clase CSS del body al desmontar el componente
        return () => {
          document.body.classList.remove('background-image');
        };
      }, []);

    return(
        <div className="pj">
            {character.name ?
            (<>
                    <h2 className="Nombre">{character.name}</h2>
            <p className="Especie">{character.species}</p>
            <p className="Estatus">{character.status}</p>
            <p className="Gender">{character.gender}</p>
            <p className="Origen">{character.origin?.name}</p>
            <img className="foto3" src={character.image} alt='' /> 
                </>
                ): (
                <h3>Loading...</h3>
                ) }
        
        </div>
            

    );
    
};

export default Detail;