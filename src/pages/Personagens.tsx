import React, { useEffect, useState } from 'react';
import { Button} from 'antd';
import { Character, fetchCharacters } from '../services/characters';
import GenericTable from '../components/Table';
import GenericModal from '../components/Modal';
import SearchBar from '../components/Search';
import MainTitlePages from '../components/MainTitlePages';

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const loadCharacters = async () => {
    setLoading(true);
    try {
      const data = await fetchCharacters();
      setCharacters(data);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Planeta Natal',
      dataIndex: 'homeworldName',
      key: 'homeworldName',
    },
    {
      title: 'Gênero',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (character: Character) => (
        <Button onClick={() => handleCharacterClick(character)}>Detalhes</Button>
      ),
    },
  ];

  const handleSearch = async (value: string) => {
    const filteredCharacters = await fetchCharacters();
    const results = filteredCharacters.filter(character => 
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setCharacters(results); 
  };

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setModalVisible(true);
  };

  return (
    <div className={`container margint_default marginb_default`}>
        <MainTitlePages 
            text="Personagens"
        />
      <SearchBar onSearch={handleSearch} placeholder="Buscar por personagem" />
      <GenericTable<Character>
        dataSource={characters}
        columns={columns}
        loading={loading}
      />
    {selectedCharacter && (
        <GenericModal
          title={selectedCharacter.name}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          content={{
            Altura: selectedCharacter.height !== undefined ? selectedCharacter.height : 'N/A',
            Massa: selectedCharacter.mass !== undefined ? selectedCharacter.mass : 'N/A',
            'Cor do Cabelo': selectedCharacter.hairColor|| 'N/A',
            'Cor da Pele': selectedCharacter.skinColor || 'N/A',
            'Cor dos Olhos': selectedCharacter.eyeColor || 'N/A',
            'Ano de Nascimento': selectedCharacter.birthYear || 'N/A',
            Gênero: selectedCharacter.gender || 'N/A',
          }}
        />
      )}
    </div>
  );
};

export default CharactersPage;
