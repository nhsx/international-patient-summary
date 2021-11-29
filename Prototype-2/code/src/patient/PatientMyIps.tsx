import React from 'react';
import { Icon, Header, TextArea, Container, Grid, Form, Placeholder, Segment, Accordion } from 'semantic-ui-react';
import { RecordButtonHuge } from '../shared/RecordButtonHuge';

const RowStyle: React.CSSProperties = {
  paddingTop: 5,
  paddingBottom: 5,
};

const DetailedView = () => {
  return (
    <React.Fragment>
      <Grid.Row style={RowStyle}>
        <Grid.Column>ID</Grid.Column>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Line length="long" />
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={RowStyle}>
        <Grid.Column>Sex</Grid.Column>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Line length="medium" />
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={RowStyle}>
        <Grid.Column>Gender I identify as</Grid.Column>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Line length="short" />
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={RowStyle}>
        <Grid.Column>Address</Grid.Column>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Line length="long" />
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={RowStyle}>
        <Grid.Column>Phone number</Grid.Column>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Line length="long" />
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  );
};

const IconButtonStyle: React.CSSProperties = {
  textAlign: 'center',
  margin: 4,
};

export const PatientMyIps = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div className="m2">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header style={{ marginBottom: 0 }}>My IPS</Header>
        <div style={{ display: 'flex' }}>
          <div style={IconButtonStyle}>
            <Icon name="share" />
            <br />
            Share
          </div>
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
        </div>
      </div>
      <Container text padded>
        <Segment padded>
          <Header>Personal information</Header>
          <Grid columns="equal">
            <Grid.Row style={RowStyle}>
              <Grid.Column>First Name</Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Line length="medium" />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={RowStyle}>
              <Grid.Column>Last Name</Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Line length="long" />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={RowStyle}>
              <Grid.Column>Date of Birth</Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Line length="medium" />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={RowStyle}>
              <Grid.Column onClick={() => setActive(!active)}>
                <a>
                  {!active && (
                    <div>
                      Show more <Icon name="angle down" />
                    </div>
                  )}
                  {active && (
                    <div>
                      Show less <Icon name="angle up" />
                    </div>
                  )}
                </a>
              </Grid.Column>
            </Grid.Row>
            {active && <DetailedView />}
          </Grid>
        </Segment>
        <Segment>
          <Header>What you need to know about me</Header>
          <Form>
            <TextArea placeholder="Tell us more" />
          </Form>
        </Segment>
        <Segment>
          <Header>Allergies and intolerances</Header>
          <RecordButtonHuge header="No information recorded" linkTo="" />
        </Segment>
        <Segment>
          <Header>Immunisations and vaccinations</Header>
          <RecordButtonHuge header="3 records found" linkTo="/patient/vaccinations" />
        </Segment>
        <Segment>
          <Header>Problems and diagnoses</Header>
          <RecordButtonHuge header="8 records found" linkTo="" />
        </Segment>
        <Segment>
          <Header>Medications</Header>
          <RecordButtonHuge header="5 records found" linkTo="" />
        </Segment>
      </Container>
    </div>
  );
};
