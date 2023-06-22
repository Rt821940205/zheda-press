import { Input, Layout, Typography, Button, Avatar, Space } from "antd";
import { CheckCard } from '@ant-design/pro-components';
import { ProForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';

const { Content } = Layout;

const { Title, Paragraph, } = Typography;
const { Search } = Input;

const contentStyle: React.CSSProperties = {
    width: '60%',
    margin: '0 auto',
    paddingBottom: 20,
    backgroundColor: '#fff',
};

const search: React.CSSProperties = {
    width: 500,
    transform: 'translateX(58%)',
    marginBottom: 40,
};

const centerBox: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
};

const cardList = [
    { title: '骨质疏松性骨折', description: '史晓林、吴连国', src: 'https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg', value: 'A' },
    { title: '骨质疏松性骨折', description: '史晓林、吴连国', src: 'https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg', value: 'B' },
    { title: '骨质疏松性骨折', description: '史晓林、吴连国', src: 'https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg', value: 'C' },
    { title: '骨质疏松性骨折', description: '史晓林、吴连国', src: 'https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg', value: 'D' },
    { title: '骨质疏松性骨折', description: '史晓林、吴连国', src: 'https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg', value: 'E' },
]

export default () => {
    return (
        <Content style={contentStyle}>
            <Title style={{ textAlign: "center" }} level={2}>作者信息完善专用页面</Title>
            <Space>
                <Paragraph>
                    页面功能说明:因本社ERP系统升级，需对作者信息进行完善补充，请您使用本人姓名查询相关著作后选择相应作品，以更新您本人在本社系统中的作者数据，感谢您对本社的信任与支持。
                </Paragraph>
                <Button type="link">作者信息完善公告文件</Button>
            </Space>
            <Search
                placeholder="请输入您的名字"
                allowClear
                enterButton="确定"
                size="large"
                style={search}
            // onSearch={onSearch}
            />
            <Paragraph>
                共检索到 5 本关联出版图书，请选择由您编著的图书:
            </Paragraph>
            <CheckCard.Group
                multiple
                onChange={(value) => {
                    console.log('value', value);
                }}
                defaultValue={[]}
                style={{ width: '100%', marginBottom: 20 }}
            >
                {
                    cardList.map(({ title, description, value, src }) => (
                        <CheckCard
                            style={{ width: '31%' }}
                            key={value}
                            title={title}
                            description={description}
                            value={value}
                            avatar={
                                <Avatar
                                    src={src}
                                    size="large"
                                />
                            }
                        />
                    ))
                }
            </CheckCard.Group>
            <Paragraph>
                系统内您的作者数据如下，请选择补全:
            </Paragraph>
            <Title level={4} style={{ textAlign: 'center', marginBottom: 20 }}>史晓林</Title>
            <div style={centerBox}>
                <ProForm<{ name: string; company: string; }>
                    onFinish={async (values) => {
                    }}
                    initialValues={{
                        name: '',
                        useMode: '',
                    }}
                    submitter={{
                        searchConfig: {
                            submitText: '保存'
                        },
                        submitButtonProps: {
                            style: {
                                transform: 'translateX(500%)'
                            }
                        },
                        resetButtonProps: {
                            style: {
                                display: "none"
                            }
                        }
                    }}

                >
                    <ProForm.Group>
                        <ProFormText
                            width="md"
                            name="name"
                            label="证件类型"
                            tooltip="最长为 24 位"
                            placeholder="请选择"
                        />
                        <ProFormText
                            width="md"
                            name="company"
                            label="证件号码"
                            placeholder="请输入"
                        />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormText
                            width="md"
                            name="name"
                            label="工作单位"
                            tooltip="最长为 24 位"
                            placeholder="请输入"
                        />
                        <ProFormText
                            width="md"
                            name="company"
                            label="联系方式"
                            placeholder="请输入"
                        />
                    </ProForm.Group>
                    <ProFormTextArea width="xl" label="工作简介" name="remark" />
                </ProForm>
            </div>
        </Content>
    )
}