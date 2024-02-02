import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from '@/theming';
import { LocalizationProvider } from '@/localization';
import { Navigation } from '@/navigation';
import { store } from '@/store';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LocalizationProvider>
            <Layout>
              <Navigation />
            </Layout>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
}

export default App;
