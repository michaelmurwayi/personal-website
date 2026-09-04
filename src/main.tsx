import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/core/theme/ThemeProvider';
import { LoadingSpinner } from '@/common/components/LoadingSpinner';
import { store, persistor } from '@/app/store';
import { router } from '@/app/router';
import '@/services'; // ensures RTK Query endpoints are injected into the shared baseApi cache
import '@/app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Restore persisted (cached) state before rendering the rest of the app. */}
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
