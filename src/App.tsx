import React from 'react';
import { Layout } from './components/Layout';
import { OperationSummary } from './components/OperationSummary';
import { Category } from './types';
import { ThemeProvider } from './theming';
import { LocalizationProvider } from './localization';
import { ModalWithControls } from './components/ModalWithControls';
import { OperationViewSection } from './sections/OperationViewSection';

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <Layout>
          <ModalWithControls />
          <OperationSummary
            amount={50.0}
            category={Category.sales}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
          />
          <OperationViewSection />
        </Layout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
