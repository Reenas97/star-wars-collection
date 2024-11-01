import React from 'react';
import { ConfigProvider, Modal } from 'antd';

interface GenericModalProps {
  title: string;
  open: boolean;
  onCancel: () => void;
  content: Record<string, any>; // Aceita um objeto onde as chaves são os títulos e os valores são os conteúdos
}

const GenericModal: React.FC<GenericModalProps> = ({ title, open, onCancel, content }) => {
  return (
    <ConfigProvider
        theme={{
          token: {
            colorText: '#ccc',
            colorBgBase: '#060606',
          },
        }}
>
        <Modal title={title} open={open} onCancel={onCancel} footer={null} centered>
          {Object.entries(content).map(([label, value]) => (
            value && (
              <p key={label}>
                <strong>{label}:</strong> {value}
              </p>
            )
          ))}
        </Modal>
    </ConfigProvider>
  );
};

export default GenericModal;

