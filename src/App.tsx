import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OperationSummary } from './components/OperationSummary';
import { Category } from './types';
import { ThemeProvider } from './theming';
import { LocalizationProvider } from './localization';
import { Navigation } from './navigation';
import { OperationViewSection } from './sections/OperationViewSection';
import { AuthForm, OperationForm } from './sections/Forms';
import { ProfileForm } from './sections/Forms/ProfileForm';
import { ModalWithControls } from './components/ModalWithControls';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LocalizationProvider>
          <Layout>
            <Navigation />
            {/* <AuthForm />
            <OperationForm />
            <ProfileForm />
            <ModalWithControls />
            <OperationSummary
              amount={50.0}
              category={Category.sales}
              title="Покупка продуктов"
              description="Покупка продуктов в местном супермаркете."
            />
            <OperationViewSection /> */}
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
