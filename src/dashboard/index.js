import React from 'react';

import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import './assets/style/layout.less';
import { Provider } from 'react-redux';
import { store } from './store';
const DashboardIndexPage = React.lazy(() => import('./dashboard'));
const DashboardStoreWrapped = () => {

    return (
        <Provider store={store}>
            <DashboardIndexPage />
        </Provider>

    )
}

export default DashboardStoreWrapped