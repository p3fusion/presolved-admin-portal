import { Card, Col, Row, Space, Avatar, Typography } from 'antd'
import React from 'react'
import { RxPerson } from 'react-icons/rx'
import '../assets/style/login.less'
const AgentLoginPage = props => {
    return (
        <section className='login-page'>

            <Card >
                <Row>
                    <Col span={24}>
                        <Space size={20}>
                            <Avatar icon={<RxPerson />} size={50} />
                            <Space direction='vertical' size={0} align="start">
                                <Typography.Title level={4}>Hi Guest</Typography.Title>
                                <Typography.Text>Authentication is required to access this portal</Typography.Text>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Card>

        </section>
    )
}

export default AgentLoginPage