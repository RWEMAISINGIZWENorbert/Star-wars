import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import './styles/Component.css'
import Loader from "./loader";

import im1 from './assets/images/1.jpg';



const CharacterDetail = () => {
    const [image] = useState({
                "1": im1,
    });

    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/${id}`);
                setCharacter(response.data);
            } catch (error) {
                console.error("Error fetching character details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) return <div><Loader/></div>;

    if (!character) return <div>Character not found.</div>;

    // console.log(character);
      
    console.log(character.length);

    return (
        <div className="component2-section">
            <div className="img">  
                 <Link to ='/'><MdKeyboardArrowLeft  className="icon"  /></Link>
                <img src={image[1]} alt="" />   
                {/* <img src={`https://starwars-visualguide.com/assets/img/characters/${imgId}.jpg`} alt="" />    */}
                
                </div>
            <div className="main2">
            <h1>{character.name}</h1>
            <p>Height: {character.height} cm</p>
            <p>Mass: {character.mass} kg</p>
            <p>Gender: {character.gender}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Films: {character.films.length}</p>
            </div>
        </div>
    );
};

CharacterDetail.propTypes = {
    imgId: PropTypes.number
}

export default CharacterDetail;
