import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(()=> {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) =>setCharacter(response.data))
    }, []);

    return(
        <div>
            {character.name ?
            (<>
                    <h2>{character.name}</h2>
            <p>{character.species}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src="{character.image}" alt="img" />
                </>
                ): (
                <h3>Loading...</h3>
                ) }
        
        </div>
            

    );
};

export default Detail;