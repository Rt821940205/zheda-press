import { Layout, Space } from "antd";

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
  width: 150,
  height: 150,
  background: '#fff',
};

export default () => {
  return <Footer style={footerStyle}>
    <div style={content}>
      <div style={left}>
        <Space direction="vertical">
          <div>浙江大学出版社</div>
          <div>友情链接</div>
        </Space>
      </div>
      <div style={center}>
        <Space size={40}>
          <div>
            <div style={qrCode}></div>
            <div style={{ textAlign: 'center' }}>浙大教程</div>
          </div>
          <div>
            <div style={qrCode}></div>
            <div style={{ textAlign: 'center' }}>微信</div>
          </div>
          <div>
            <div style={qrCode}></div>
            <div style={{ textAlign: 'center' }}>微博</div>
          </div>
        </Space>
      </div>
      <div style={right}>
        <div>
          <div>关于我们</div>
          <div>企业简介</div>
          <div>发展历史</div>
          <div>组织架构</div>
          <div>海外合作</div>
          <div>企业荣誉</div>
          <div>领导班子</div>
        </div>
        <div>
          <div>公告</div>
          <div>XXXXX</div>
        </div>
        <div>
          <div>新闻</div>
          <div>新闻动态</div>
          <div>媒体聚焦</div>
          <div>精彩书评</div>
        </div>
        <div>
          <div>联系我们</div>
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