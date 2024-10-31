export interface Movie{
    name: string;
    imageUrl?: string;
}

const moviesImageMap: { [key: string]: string } = {
  "A New Hope": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_JWhikDZh0YpOP1_tperDaMryTNW-EGrptQKNHbboKPpWwA-bpoWhbcuNxOlNWGkv-k&usqp=CAU",
  "The Empire Strikes Back" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H2AwPcw1MtuvaDqtPGUuQ0_AV-RrWv4jG9wIntbL8FIfRSLxHlrk-iA3qR_GcpJD1js&usqp=CAU",
  "Return of the Jedi" : "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
};


export const fetchMovies = async  (): Promise<Movie[]> => {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    const movieData: Movie[] = await Promise.all(
        data.results.map(async (movie: any, index: number) => {
    
          // Gera a URL da imagem para o personagem usando o índice
          const imageUrl = moviesImageMap[movie.title] || '';
    
          return {
            name: movie.title,
            imageUrl,
          };
        })
      );
    
      return movieData;
}
