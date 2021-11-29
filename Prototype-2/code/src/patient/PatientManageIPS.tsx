import { Header } from 'semantic-ui-react';
import { ActionButtonHuge } from '../shared/ActionButtonHuge';

export const PatientManageIps = () => {
  return (
    <div className="m2">
      <Header>My IPS</Header>
      <Header size="small">Manage my IPS</Header>
      <div>
        <ActionButtonHuge
          header="View and revoke sharing codes"
          text="View, manage and revoke previously generated sharing codes"
          linkTo="/patient/codes"
        />
        <ActionButtonHuge
          header="Change my IPS preferences"
          text="Change my preferences for my access to my IPS if I am unconscious or incapable of giving consent in an emergency"
          linkTo="/patient/preferences"
        />
        <ActionButtonHuge
          header="Close my IPS account"
          text="Close my International Patient Summary account"
          linkTo="/patient/close"
        />
      </div>
    </div>
  );
};
