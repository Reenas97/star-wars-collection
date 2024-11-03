import { fetchMovie } from "./movies";
import { fetchPlanet } from "./planets";

export interface Character {
  name: string;
  homeworld: string;
  homeworldName: string;
  imageUrl?: string;
  birthYear?: string;
  eyeColor?: string;
  gender?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
  skinColor?: string;
  movie?: string[];
  movieNames?: string[];
}

const characterImageMap: { [key: string]: string } = {
    "Luke Skywalker": "https://nsabers.de/cdn/shop/articles/opolar_Luke_Skywalker_illuminated_only_by_his_green_lightsaber._ea2cfe7b-c177-4019-9b1d-14ca18970bdc.png?v=1706273475&width=500",
    "C-3PO" : "https://lojalimitededition.vteximg.com.br/arquivos/ids/378345-1000-1000/image-eb6d9a66f67d4f23a7a5494985738918.jpg?v=638096100658800000",
    "R2-D2" : "https://reflektsabers.com/cdn/shop/articles/3.png?v=1676570482"
};

export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
  
    const characterData: Character[] = await Promise.all(
      data.results.map(async (character: any, index: number) => {
        const planet = await fetchPlanet(character.homeworld);
        const movies = await fetchMovie(character.films);
        const movieNames = movies.map((movie) => movie.name).join(", ");
  
        const imageUrl = characterImageMap[character.name] || '';
  
        return {
          name: character.name,
          homeworld: character.homeworld,
          homeworldName: planet.name,
          imageUrl,
          birthYear: character.birth_year,
          eyeColor: character.eye_color,
          gender: character.gender,
          hairColor: character.hair_color,
          height: character.height,
          mass: character.mass,
          skinColor: character.skin_color,
          movieNames: movieNames,
        };
      })
    );
  
    return characterData;
};