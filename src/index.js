import { Router } from "@gatsbyjs/reach-router";
import { Amplify } from 'aws-amplify';
import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import awsExports from './aws-exports';
import DefaultErrorBoundary from "./errorBoundary";
import Suspence from "./suspence";


const DashboardStoreWrapped = React.lazy(() => import('./dashboard'));
const root =  document.getElementById("root");

Amplify.configure(awsExports);


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Suspence/>}>
      <DefaultErrorBoundary>
        <Router basepath="/">
          <DashboardStoreWrapped path="/*" />
        </Router>
      </DefaultErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  root
);