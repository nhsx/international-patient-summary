import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import './App.css';
import 'basscss/css/basscss-important.min.css';

// https://reactrouter.com/docs/en/v6/getting-started/tutorial
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LanguageContext } from './shared/LanguageContext';
import { i18n, LocaleTypes } from './shared/i18n';

import { LandingPage } from './LandingPage';

import { PatientPage } from './patient/PatientPage';
import { PatientRoutes } from './patient/PatientRoutes';

import { ClinicianPage } from './clinician/ClinicianPage';
import { LoginPage } from './LoginPage';
import { ClinicianRoutes } from './clinician/ClinicianRoutes';

function App() {
  const [language, setLanguage] = React.useState<LocaleTypes>('en_us');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, i18n: i18n(language) }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="patient" element={<PatientPage />}>
            {PatientRoutes()}
          </Route>
          <Route path="clinician" element={<ClinicianPage />}>
            {ClinicianRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
