import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';

// ----------------------------------------------------------------------

const DashboardTruongKhoa = () => {

  return (

    <HelmetProvider>

      <Suspense>
        <App />

      </Suspense>

    </HelmetProvider>
  );
}
export default DashboardTruongKhoa
