import React, { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Card from "../components/Card"
import HomeSection from "../components/HomeSection"
import { Character, fetchCharacters } from "../services/characters";
import { Planet, fetchPlanets } from "../services/planets";
import { Starship, fetchStarships } from "../services/starships";
import { Movie, fetchMovies } from "../services/movies";
import bannerImg from '../assets/images/main-banner.jpg'
import GenericModal from "../components/Modal";

function Home() {
    
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loadingCharacters, setLoadingCharacters] = useState(true);
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [loadingPlanets, setLoadingPlanets] = useState(true);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loadingStarships, setLoadingStarships] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loadingMovies, setLoadingMovies] = useState(true);
    const [selectedItem, setSelectedItem] = useState<Character | Planet | Starship | Movie | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleItemClick = (item: Character | Planet | Starship | Movie) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const getModalContent = () => {
        if (!selectedItem) return {};
        
        if ("gender" in selectedItem) {  // Character
            return {
                Altura: selectedItem.height,
                Massa: selectedItem.mass,
                'Cor do Cabelo': selectedItem.hairColor,
                'Cor da Pele': selectedItem.skinColor,
                'Cor dos Olhos': selectedItem.eyeColor,
                'Ano de Nascimento': selectedItem.birthYear,
                Gênero: selectedItem.gender,
                Filmes: selectedItem.movieNames,
            };
        } else if ("terrain" in selectedItem) {  // Planet
            return {
                Nome: selectedItem.name,
                População: selectedItem.population,
                Terreno: selectedItem.terrain,
                Clima: selectedItem.climate,
            };
        } else if ("model" in selectedItem) {  // Starship
            return {
                Nome: selectedItem.name,
                Modelo: selectedItem.model,
                Fabricante: selectedItem.manufacturer,
                'Classe': selectedItem.starshipClass
            };
        } else if ("releaseDate" in selectedItem) {  // Movie
            return {
                Título: selectedItem.name,
                Diretor: selectedItem.director,
                Produtores: selectedItem.producer,
                'Data de Lançamento': selectedItem.releaseDate,
                Sinopse: selectedItem.openingCrawl,
            };
        }
        return {};
    };    

    useEffect(() =>{
        const getCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data);
                setLoadingCharacters(false);
            } catch (error) {
                console.error('Erro ao carregar personagens', error);
            }
        };

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
                CardComponent={({item}) => (
                    <Card name = {item.name} imageUrl={item.imageUrl} homeworld={item.homeworldName} link={() => handleItemClick(item)} />
                )}
                link = "/personagens"
                text = "Ver todos os Personagens"
            />

            <HomeSection 
                title="Planetas"
                items = {limitedPlanets}
                loading = {loadingPlanets}
                CardComponent={({item}) => (
                    <Card name = {item.name} imageUrl={item.imageUrl} link={() => handleItemClick(item)} />
                )}
                link = "/planetas"
                text = "Ver todos os Planetas"
            />

            <HomeSection 
                title="Naves"
                items = {limitedStarships}
                loading = {loadingStarships}
                CardComponent={({item}) => (
                    <Card name = {item.name} imageUrl={item.imageUrl} link={() => handleItemClick(item)} />
                )}
                link = "/naves"
                text = "Ver todas as Naves"
            />
            <HomeSection 
                title="Filmes"
                items = {limitedMovies}
                loading = {loadingMovies}
                CardComponent={({item}) => (
                    <Card name = {item.name} imageUrl={item.imageUrl} link={() => handleItemClick(item)} />
                )}
                link = "/filmes"
                text = "Ver todos os filmes"
            />

            <GenericModal
                title={selectedItem ? selectedItem.name : ''}
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                content={getModalContent()}
            />
        </>
    )
}

export default Home