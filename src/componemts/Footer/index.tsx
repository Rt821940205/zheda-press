import { Layout, Select, Space } from "antd";
import logoSrc from '../../assets/logo.png';
import qrcode1 from '../../assets/qrcode1.jpg';
import qrcode2 from '../../assets/qrcode1.jpg';
import qrcode3 from '../../assets/qrcode3.png';

const { Footer } = Layout;

const footerStyle: React.CSSProperties = {
  color: '#fff',
  backgroundColor: 'rgb(17, 115, 187)',
};

const content: React.CSSProperties = {
  width: '70%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between'
};

const left: React.CSSProperties = {
};

const center: React.CSSProperties = {
};

const right: React.CSSProperties = {
  display: 'flex',
  width: 300,
  justifyContent: 'space-between'
};

const qrCode: React.CSSProperties = {
  width: 130,
  height: 130,
};

const logo: React.CSSProperties = {
  width: 300,
  height: 130,
};

const loginSrc: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const handleChange = (value: string) => {
  window.open(value)
};

const list1: any[] = [
  {text: '企业简介', link: 'http://www.press.zju.edu.cn/40906/list.htm'},
  {text: '发展历史', link: 'http://www.press.zju.edu.cn/40907/list.htm'},
  {text: '组织架构', link: 'http://www.press.zju.edu.cn/40908/list.htm'},
  {text: '海外合作', link: 'http://www.press.zju.edu.cn/40909/list.htm'},
  {text: '企业荣誉', link: 'http://www.press.zju.edu.cn/40910/list.htm'},
  {text: '领导班子', link: 'http://www.press.zju.edu.cn/40911/list.htm'},
];

export default () => {
  return <Footer style={footerStyle}>
    <div style={content}>
      <div style={left}>
        <Space direction="vertical" style={{ alignItems: 'center', marginTop: -25 }}>
          {/* <div>浙江大学出版社</div> */}
          <div style={logo}><img style={loginSrc} src={logoSrc} alt="" /></div>
          <Select
            placeholder="友情链接"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: 'http://www.sinobook.com.cn/', label: '中国高校教材图书网' },
            ]}
          />
        </Space>
      </div>
      <div style={center}>
        <Space size={25}>
          <div>
            <div style={qrCode}><img style={{ width: '100%', height: '100%' }} src={qrcode1} alt="" /></div>
            <div style={{ textAlign: 'center' }}>浙大教程</div>
          </div>
          <div>
            <div style={qrCode}><img style={{ width: '100%', height: '100%' }} src={qrcode2} alt="" /></div>
            <div style={{ textAlign: 'center' }}>微信</div>
          </div>
          <div>
            <div style={qrCode}><img style={{ width: '100%', height: '100%' }} src={qrcode3} alt="" /></div>
            <div style={{ textAlign: 'center' }}>微博</div>
          </div>
        </Space>
      </div>
      <div style={right}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>关于我们</div>
          <div>企业简介</div>
          <div>发展历史</div>
          <div>组织架构</div>
          <div>海外合作</div>
          <div>企业荣誉</div>
          <div>领导班子</div>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>公告</div>
          <div></div>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>新闻</div>
          <div>新闻动态</div>
          <div>媒体聚焦</div>
          <div>精彩书评</div>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>联系我们</div>
          <div>读者服务</div>
          <div>欢迎投稿</div>
          <div>经销商服务</div>
          <div>版权贸易</div>
          <div>书目下载</div>
        </div>
      </div>
    </div>
  </Footer>
}