import { Route } from 'react-router-dom';

import { AllergiesPage } from './PatientAllergies';
import { PatientHome } from './PatientHome';
import { PatientConsent } from './PatientConsent';
import { PatientManageIps } from './PatientManageIPS';
import { PatientShareIps } from './PatientShareIps';
import { PatientCodes1 } from './PatientCodes1';
import { PatientCodes } from './PatientCodes';
import { PatientMyIps } from './PatientMyIps';
import { PatientClose } from './PatientClose';
import { PatientCodesNew } from './PatientCodesNew';
import { PatientIpsPreferencesConsent } from './PatientIpsPreferences';
import { VaccinationsPage } from './PatientVaccinations';

export const PatientRoutes = () => {
  return [
    <Route path="" element={<PatientHome />} />,
    <Route path="consent" element={<PatientConsent />} />,
    <Route path="close" element={<PatientClose />} />,
    <Route path="share" element={<PatientShareIps />} />,
    <Route path="codes" element={<PatientCodes />} />,
    <Route path="codes/new" element={<PatientCodesNew />} />,
    <Route path="codes/1" element={<PatientCodes1 />} />,
    <Route path="manage" element={<PatientManageIps />} />,
    <Route path="allergies" element={<AllergiesPage />} />,
    <Route path="vaccinations" element={<VaccinationsPage />} />,
    <Route path="myips" element={<PatientMyIps />} />,
    <Route path="preferences" element={<PatientIpsPreferencesConsent />} />,
  ];
};
