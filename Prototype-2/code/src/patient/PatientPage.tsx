import { Outlet } from 'react-router-dom';
import { FloatingMenu } from '../shared/FloatingMenu';

export const PatientPage = () => {
  return (
    <div>
      <FloatingMenu />
      <div style={{ height: '3rem' }} />
      <div className="max-width-4 mx-auto mt3">
        <Outlet />
      </div>
    </div>
  );
};
