import { Layout } from "antd";
import logoSrc from '../../assets/logo.png';

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
    width: 300,
    height: 130,
    paddingTop: 20,
};

const loginSrc: React.CSSProperties = {
    width: '100%',
    height: '100%',
};

export default () => {
    return <Header style={headerStyle}>
        <div style={logo}><img style={loginSrc} src={logoSrc} alt="" /></div>
    </Header>
}