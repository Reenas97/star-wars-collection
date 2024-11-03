export interface Movie{
    name: string;
    imageUrl?: string;
    director?: string,
    producer?: string;
    releaseDate?: string;
    openingCrawl?: string;
}

export const fetchMovie = async (urls: string[]): Promise<Movie[]> => {
  const movies = await Promise.all(urls.map(async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar Filme');
    }
    const data = await response.json();
    return { name: data.title }; 
  }));

  return movies;
};

const moviesImageMap: { [key: string]: string } = {
  "A New Hope": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_JWhikDZh0YpOP1_tperDaMryTNW-EGrptQKNHbboKPpWwA-bpoWhbcuNxOlNWGkv-k&usqp=CAU",
  "The Empire Strikes Back" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H2AwPcw1MtuvaDqtPGUuQ0_AV-RrWv4jG9wIntbL8FIfRSLxHlrk-iA3qR_GcpJD1js&usqp=CAU",
  "Return of the Jedi" : "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
};


export const fetchMovies = async  (): Promise<Movie[]> => {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    const movieData: Movie[] = await Promise.all(
        data.results.map(async (movie: any) => {
    
          // Gera a URL da imagem para o personagem usando o índice
          const imageUrl = moviesImageMap[movie.title] || '';
    
          return {
            name: movie.title,
            imageUrl,
            director: movie.director,
            producer: movie.producer,
            releaseDate: movie.release_date,
            openingCrawl: movie.opening_crawl
          };
        })
      );
    
      return movieData;
}
