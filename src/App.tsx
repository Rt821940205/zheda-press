import React from 'react';
import { Layout, Space } from 'antd';
import Header from './componemts/Header';
import Content from './componemts/Content';
import Footer from './componemts/Footer';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout style={{ background: '#fff' }}>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Space>
);

export default App;