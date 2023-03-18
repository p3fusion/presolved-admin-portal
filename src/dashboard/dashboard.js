

import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import './assets/style/layout.less';
import { Router } from '@gatsbyjs/reach-router';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useState } from 'react';

const AgentIndexPage = React.lazy(() => import('./pages/indexPage'))
const ChannelsInteraction = React.lazy(() => import('./pages/channels'))
const DashboardPrimaryHeader = React.lazy(() => import('./layout/header'))
const DashboardPrimarySidebar = React.lazy(() => import('./layout/sidebar'))
const ConnectWidget = React.lazy(() => import('./layout/connect'))
const AgentLoginPage = React.lazy(() => import('./pages/login'))




const DashboardIndexPage = () => {
    const user = useSelector((state) => state.user)
    const [state, setState] = useState(({
        isLoggedin: false
    }))
    useEffect(() => {
        if (user.isLoggedin) {
            setState({
                ...state,
                isLoggedin: true
            })
        }
    }, [user])


    return (
        <section className='master'>
            <DashboardPrimaryHeader />
            {
                state.isLoggedin ?
                    <section className='wrapper'>
                        <DashboardPrimarySidebar />
                        <div className='container'>
                            <ConnectWidget />
                            <Router>
                                <AgentIndexPage path="/" />
                                <ChannelsInteraction path="channels" />
                            </Router>
                        </div>
                    </section>
                    :
                    <section className='login-wrapper'>
                        <AgentLoginPage />
                    </section>
            }
        </section>
    )

}

export default DashboardIndexPage