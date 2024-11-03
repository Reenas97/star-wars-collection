import React, { useEffect, useState } from 'react';
import { Button} from 'antd';
import { Movie, fetchMovies } from '../services/movies';
import GenericTable from '../components/Table';
import GenericModal from '../components/Modal';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Diretor',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: 'Produtores',
      dataIndex: 'producer',
      key: 'producer',
    },
    {
      title: 'Data de Lançamento',
      dataIndex: 'releaseDate',
      key: 'releaseDate',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (movie: Movie) => (
        <Button onClick={() => handleMovieClick(movie)}>Ver Sinopse</Button>
      ),
    },
  ];

  const handleSearch = async (value: string) => {
    const filteredMovies = await fetchMovies();
    const results = filteredMovies.filter(movie => 
      movie.name.toLowerCase().includes(value.toLowerCase())
    );
    setMovies(results); 
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  return (
    <div className={`container margint_default marginb_default`}>
        <MainTitlePages 
            text="Filmes"
        />
      <SearchBar onSearch={handleSearch} placeholder="Buscar por filme" />
      <GenericTable<Movie>
        dataSource={movies}
        columns={columns}
        loading={loading}
      />
    {selectedMovie && (
        <GenericModal
          title={selectedMovie.name}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          content={{
            Sinopse: selectedMovie.openingCrawl !== undefined ? selectedMovie.openingCrawl : 'N/A',
          }}
        />
      )}
    </div>
  );
};

export default MoviesPage;
