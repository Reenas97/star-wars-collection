import React, { useEffect, useState } from 'react';
import { Starship, fetchStarships} from '../services/starships';
import GenericTable from '../components/Table';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';

const StarshipsPage: React.FC = () => {
  const [starships, setStafetchStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadStarship = async () => {
    setLoading(true);
    try {
      const data = await fetchStarships();
      setStafetchStarships(data);
    } catch (error) {
      console.error('Erro ao buscar naves:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStarship();
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
    const filteredStarships = await fetchStarships();
    const results = filteredStarships.filter(starship => 
      starship.name.toLowerCase().includes(value.toLowerCase())
    );
    setStafetchStarships(results); 
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
