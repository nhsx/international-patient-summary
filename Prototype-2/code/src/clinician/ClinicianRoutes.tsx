import { Route } from 'react-router-dom';
import { ClinicianEmergency } from './ClinicianEmergency';
import { ClinicianPatientView } from './ClinicianPatientView';
import { ClinicianRequestAccess } from './ClinicianRequestAccess';

export const ClinicianRoutes = () => {
  return [
    <Route path="" element={<ClinicianRequestAccess />} />,
    <Route path="view" element={<ClinicianPatientView />} />,
    <Route path="emergency" element={<ClinicianEmergency />} />,
  ];
};
