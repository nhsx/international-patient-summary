import { Link, Outlet } from 'react-router-dom';
import { Flag, Grid, Header, Icon } from 'semantic-ui-react';
import React from 'react';

const LeftSideButtonStyle: React.CSSProperties = {
  borderRadius: 5,
  background: 'lightgrey',
  color: 'black',
  display: 'block',
  padding: 10,
  marginBottom: 10,
};

export const ClinicianPage = () => {
  return (
    <div className="m2">
      <Grid padded divided /* className="p3" divided style={{ height: '100vh' }} */>
        <Header size="large">
          International Patient Summary - United Kingdom <Flag name="uk" />
        </Header>
        <Grid.Row columns="equal">
          <Grid.Column textAlign="center" width={2}>
            <Link to="/clinician" style={LeftSideButtonStyle}>
              Access with a share code
            </Link>
            <Link to="/clinician/emergency" style={LeftSideButtonStyle}>
              Emergency access
            </Link>
            <div style={{ textAlign: 'center', margin: 4 }}>
              <Icon name="translate" />
              <br />
              Language
            </div>
          </Grid.Column>
          <Grid.Column>
            <Outlet />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
