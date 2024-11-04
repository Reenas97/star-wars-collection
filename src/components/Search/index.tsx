import { Col, ConfigProvider, Input, Row } from 'antd';
import React from 'react';

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
  <Row justify="end" style={{ marginBottom: '30px' }}>
    <Col xs={24} sm={24} md={12} lg={8}>
      <Search
        placeholder={placeholder}
        enterButton="Buscar"
        size="large"
        onSearch={onSearch}
        style={{ width: '100%' }} 
      />
    </Col>
  </Row>
</ConfigProvider>
  );
};

export default SearchBar;