import { Table as AntTable, ConfigProvider } from 'antd';
import type { TableColumnsType } from 'antd';
import React from 'react';

interface GenericTableProps<T> {
  columns: TableColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
}

const GenericTable = <T,>({
  columns,
  dataSource,
  loading,
}: GenericTableProps<T>) => {
  return (
<ConfigProvider
  theme={{
    token: {
        colorBgContainer: '#060606',
        colorText: '#ccc',
        colorBorder: '#0cd7e9',
        colorBorderSecondary: '#0cd7e9',
        colorPrimary: '#0cd7e9',
    },
  }}
>
<div style={{ overflowX: 'auto' }}>
<AntTable<T>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={{ pageSize: 5 }}
      rowKey={(record) => (record as any).name}
      scroll={{ x: 'max-content' }}
    />
</div>
</ConfigProvider>
  );
};

export default GenericTable;

