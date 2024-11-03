import React, { useEffect} from 'react';
import { Starship, fetchStarships} from '../services/starships';
import GenericTable from '../components/Table';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLoading } from '../redux/slices/starshipsSlice';
import { setStarships } from '../redux/slices/starshipsSlice';

const StarshipsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { starships, loading } = useSelector((state: RootState) => state.starships);

  const loadStarships = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchStarships();
      dispatch(setStarships(data));
    } catch (error) {
      console.error('Erro ao buscar naves:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    loadStarships();
  }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Modelo',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Fabricante',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'Classe',
      dataIndex: 'starshipClass',
      key: 'starshipClass',
    },
  ];

  const handleSearch = async (value: string) => {
    dispatch(setLoading(true));
    try {
      const allCharacters = await fetchStarships();
      const results = allCharacters.filter(starship => 
        starship.name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setStarships(results));
    } catch (error) {
      console.error('Erro ao buscar naves:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={`container margint_default marginb_default`}>
        <MainTitlePages 
            text="Naves"
        />
      <SearchBar onSearch={handleSearch} placeholder="Buscar por nave" />
      <GenericTable<Starship>
        dataSource={starships}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default StarshipsPage;


