import React from 'react';
import { Col, Row } from 'antd';

interface CardListProps {
    items: any[];
    CardComponent: React.FC<any>;
}

const CardList: React.FC<CardListProps> = ({ items, CardComponent }) => {
    return (
        <div className="container">
            <Row gutter={{ xs: 8, sm: 16, md: 36, xxl: 96 }} className='gap'>
                {items.map((item) => (
                    <Col xs={24} sm={12} md={8} key={item.name}>
                        <CardComponent item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CardList;
