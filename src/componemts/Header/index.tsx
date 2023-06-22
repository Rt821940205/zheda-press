import { Layout } from "antd";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
    display: 'flex',
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#fff',
    alignItems: 'center'
};

const logo: React.CSSProperties = {
    width: 120,
    height: 32,
    background: '#000',
    borderRadius: 6,
};

export default () => {
    return <Header style={headerStyle}>
        <div style={logo}></div>
    </Header>
}