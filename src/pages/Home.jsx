import React from 'react'
import { Button, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';

const HomePage = () => {
    return (
        <>
            <Layout>
                <Content>
                    <div className="card">
                        <Button type='primary' > Button </Button>
                        <p>
                            Edit <code>src/App.jsx</code> and save to test HMR
                        </p>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default HomePage