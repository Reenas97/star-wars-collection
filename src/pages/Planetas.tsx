import React, { useEffect, useState } from 'react';
import { Planet, fetchPlanets } from '../services/planets';
import GenericTable from '../components/Table';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';

const PlanetsPage: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadPlanet = async () => {
    setLoading(true);
    try {
      const data = await fetchPlanets();
      setPlanets(data);
    } catch (error) {
      console.error('Erro ao buscar planetas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlanet();
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
    const filteredPlanets = await fetchPlanets();
    const results = filteredPlanets.filter(planet => 
      planet.name.toLowerCase().includes(value.toLowerCase())
    );
    setPlanets(results); 
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
