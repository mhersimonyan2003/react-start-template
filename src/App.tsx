import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from '@/theming';
import { LocalizationProvider } from '@/localization';
import { Navigation } from '@/navigation';
import { store } from '@/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LocalizationProvider>
            <Layout>
              <Navigation />
            </Layout>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
