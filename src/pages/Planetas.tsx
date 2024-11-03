import React, { useEffect } from 'react';
import { Planet, fetchPlanets } from '../services/planets';
import GenericTable from '../components/Table';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLoading } from '../redux/slices/charactersSlice';
import { setPlanets } from '../redux/slices/planetsSlice';

const PlanetsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { planets, loading } = useSelector((state: RootState) => state.planets);

  const loadPlanets = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchPlanets();
      dispatch(setPlanets(data));
    } catch (error) {
      console.error('Erro ao buscar planetas:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    loadPlanets();
  }, []);


  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'População',
      dataIndex: 'population',
      key: 'population',
    },
    {
      title: 'Terreno',
      dataIndex: 'terrain',
      key: 'terrain',
    },
    {
      title: 'Clima',
      dataIndex: 'climate',
      key: 'climate',
    },
  ];

  const handleSearch = async (value: string) => {
    dispatch(setLoading(true));
    try {
      const allCharacters = await fetchPlanets();
      const results = allCharacters.filter(planets => 
        planets.name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setPlanets(results));
    } catch (error) {
      console.error('Erro ao buscar planetas:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={`container margint_default marginb_default`}>
        <MainTitlePages 
            text="Planetas"
        />
      <SearchBar onSearch={handleSearch} placeholder="Buscar por planeta" />
      <GenericTable<Planet>
        dataSource={planets}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default PlanetsPage;
