import { ConfigProvider, Input } from 'antd';

const { Search } = Input;

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Buscar" }) => {
  return (
    <ConfigProvider
  theme={{
    token: {
        colorBgContainer: '#060606',
        colorTextPlaceholder: '#ccc',
        colorText: '#ccc',
        colorBorder: '#0cd7e9',
        colorPrimary: '#0cd7e9',
    },
  }}
>
<Search
      placeholder={placeholder}
      enterButton="Buscar"
      size="large"
      onSearch={onSearch}
      style={{ marginBottom: '30px', width: '35%', float: 'right' }} 
    />
</ConfigProvider>
  );
};

export default SearchBar;