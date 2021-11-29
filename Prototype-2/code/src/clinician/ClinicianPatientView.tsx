import React from 'react';
import { Container, Divider, Form, Grid, Header, Icon, Placeholder, Segment, TextArea } from 'semantic-ui-react';
import { RecordButtonHuge } from '../shared/RecordButtonHuge';

const RowStyle: React.CSSProperties = {
  paddingTop: 5,
  paddingBottom: 5,
};

const IconButtonStyle: React.CSSProperties = {
  textAlign: 'center',
  margin: 4,
};

export const ClinicianPatientView = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Header size="large">Patient IPS</Header>
          <Header size="small">Access code: X V X V X V</Header>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={IconButtonStyle}>
            <Icon name="file pdf" />
            <br />
            Download
          </div>
          <div style={IconButtonStyle}>
            <Icon name="print" />
            <br />
            Print
          </div>
          <div style={IconButtonStyle}>
            <Icon name="exchange" />
            <br />
            Copy to my EPR system
          </div>
        </div>
      </div>

      <Grid divided columns="equal" className="mt3">
        <Grid.Column>
          <Segment padded>
            <Header>Personal information</Header>
            <Grid columns="equal">
              <Grid.Row style={RowStyle}>
                <Grid.Column>First Name</Grid.Column>
                <Grid.Column>Max</Grid.Column>
              </Grid.Row>
              <Grid.Row style={RowStyle}>
                <Grid.Column>Last Name</Grid.Column>
                <Grid.Column>Marchard</Grid.Column>
              </Grid.Row>
              <Grid.Row style={RowStyle}>
                <Grid.Column>Date of Birth</Grid.Column>
                <Grid.Column>01 Jan 2000</Grid.Column>
              </Grid.Row>
              <Grid.Row style={RowStyle}>
                <Grid.Column>Country of Residence</Grid.Column>
                <Grid.Column>UK</Grid.Column>
              </Grid.Row>
              <Grid.Row style={RowStyle}>
                <Grid.Column>ID</Grid.Column>
                <Grid.Column>###############</Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <Header>What you need to know about me</Header>
            <p>For religious reasons, I would like not to receive blood transfusion.</p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header>Allergies and intolerances</Header>
            <RecordButtonHuge header="No information recorded" linkTo="" down />
          </Segment>
          <Segment>
            <Header>Immunisations and vaccinations</Header>
            <div
              onClick={() => setActive(!active)}
              style={{
                // de-style link

                borderRadius: 10,
                border: '1px solid grey',
                margin: '8px 0',
                textAlign: 'center',
                padding: '20px 0',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '1.1rem' }}>
                <React.Fragment>
                  2 records found
                  <Icon name="angle down" />
                </React.Fragment>
              </div>
            </div>
            {active && (
              <div>
                <Segment>
                  <Header as="h3">12 August 2021</Header>
                  <p>Administration of second dose of SARS-COV-2 vaccine</p>
                </Segment>
                <Segment>
                  <Header as="h3">17 June 2021</Header>
                  <p>Administration of first dose of SARS-COV-2 vaccine</p>
                </Segment>
              </div>
            )}
          </Segment>
          <Segment>
            <Header>Problems and diagnoses</Header>
            <RecordButtonHuge header="8 records found" linkTo="" down />
          </Segment>
          <Segment>
            <Header>Medications</Header>
            <RecordButtonHuge header="5 records found" linkTo="" down />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};
