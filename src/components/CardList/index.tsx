import { Col, Row } from 'antd';

interface CardListProps {
    items: any[]; // Ajuste para o tipo apropriado
    CardComponent: React.FC<any>; // O componente que renderiza cada card
}
  
const CardList: React.FC<CardListProps> = ({ items, CardComponent }) => {
    return (
        <div className="container">
            <Row gutter={{ xs: 8, sm: 16, md: 36, xxl: 96 }} className='gap'>
                {items.map((item, index) => (
                    <Col xs={24} sm={12} md={8} key={item.name}> {/* Adiciona a key aqui */}
                        <CardComponent item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
  
  export default CardList;