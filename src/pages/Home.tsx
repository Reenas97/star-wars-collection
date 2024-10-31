import { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Card from "../components/Card"
import HomeSection from "../components/HomeSection"
import { Character, fetchCharacters } from "../services/characters";
import { Planet, fetchPlanets } from "../services/planets";
import { Starship, fetchStarships } from "../services/starships";
import { Movie, fetchMovies } from "../services/movies";
import bannerImg from '../assets/images/main-banner.jpg'

function Personagens() {
    
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loadingCharacters, setLoadingCharacters] = useState(true);
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [loadingPlanets, setLoadingPlanets] = useState(true);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loadingStarships, setLoadingStarships] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loadingMovies, setLoadingMovies] = useState(true);

    useEffect(() =>{
        const getCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data);
                setLoadingCharacters(false);
            } catch (error){
                console.error('Erro ao carregar personagens', error);
            }
        }

        const getPlanets = async () => {
            try {
                const data = await fetchPlanets();
                setPlanets(data);
                setLoadingPlanets(false);
            } catch (error){
                console.error('Erro ao carregar planetas', error);
            }
        }

        const getStarships = async () => {
            try {
                const data = await fetchStarships();
                setStarships(data);
                setLoadingStarships(false);
            } catch (error){
                console.error('Erro ao carregar espaçonaves', error);
            }
        }

        const getMovies = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);
                setLoadingMovies(false);
            } catch (error){
                console.error('Erro ao carregar filmes', error);
            }
        }

      getCharacters();
      getPlanets();
      getStarships();
      getMovies();
    }, [])

    const limitedCharacters = characters.slice(0, 3);
    const limitedPlanets = planets.slice(0, 3);
    const limitedStarships = starships.slice(4, 7);
    const limitedMovies = movies.slice(0, 3);

    return (
        <>
            <Banner 
                image={bannerImg}
                alt='Banner com personagens do Star Wars'
             />

            <HomeSection 
                title="Personagens"
                items = {limitedCharacters}
                loading = {loadingCharacters}
                CardComponent={({name, imageUrl, homeworldName}) => (
                    <Card name = {name} imageUrl={imageUrl} homeworld={homeworldName} link={'#'} />
                )}
                link = "#"
                text = "Ver todos os Personagens"
            />

            <HomeSection 
                title="Planetas"
                items = {limitedPlanets}
                loading = {loadingPlanets}
                CardComponent={({name, imageUrl}) => (
                    <Card name = {name} imageUrl={imageUrl} link={'#'} />
                )}
                link = "#"
                text = "Ver todos os Planetas"
            />

            <HomeSection 
                title="Espaçonaves"
                items = {limitedStarships}
                loading = {loadingStarships}
                CardComponent={({name, imageUrl}) => (
                    <Card name = {name} imageUrl={imageUrl} link={'#'} />
                )}
                link = "#"
                text = "Ver todas as Espaçonaves"
            />
            <HomeSection 
                title="Filmes"
                items = {limitedMovies}
                loading = {loadingMovies}
                CardComponent={({name, imageUrl}) => (
                    <Card name = {name} imageUrl={imageUrl} link={'#'} />
                )}
                link = "#"
                text = "Ver todos os filmes"
            />
        </>
    )
}

export default Personagens