import React, { useEffect, useState } from 'react';
import { Button} from 'antd';
import { Movie, fetchMovies } from '../services/movies';
import GenericTable from '../components/Table';
import GenericModal from '../components/Modal';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLoading } from '../redux/slices/charactersSlice';
import { setMovies } from '../redux/slices/moviesSlice';

const MoviesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state: RootState) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const loadMovies = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchMovies();
      dispatch(setMovies(data));
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    loadMovies();
  }, [dispatch]);

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
    dispatch(setLoading(true));
    try {
      const allMovies = await fetchMovies();
      const results = allMovies.filter(movie => 
        movie.name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setMovies(results));
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      dispatch(setLoading(false));
    }
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
