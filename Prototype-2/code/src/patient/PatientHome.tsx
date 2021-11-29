import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { ActionButtonHuge } from '../shared/ActionButtonHuge';

const RowStyle: React.CSSProperties = {
  paddingTop: 5,
  paddingBottom: 5,
};

export const OptedInValue = {
  value: false,
};

const ActionButtons = () => {
  if (!OptedInValue.value) {
    return (
      <ActionButtonHuge header="Set up my IPS" text="Start using my International Patient Summary" linkTo="consent" />
    );
  }
  return (
    <div>
      <ActionButtonHuge
        header="View my international patient summary record"
        text="View, download and print my IPS Record"
        linkTo="myips"
      />
      <ActionButtonHuge
        header="Share my International Patient Summary"
        text="Create a sharing code for 3rd parties to access my IPS"
        linkTo="share"
      />
      <ActionButtonHuge header="Manage my IPS" text="Manage my sharing codes and my IPS account" linkTo="manage" />
    </div>
  );
};

export const PatientHome = () => {
  return (
    <div className="m2">
      <Header>My IPS</Header>
      <Segment padded>
        <Header>Home</Header>
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
      <ActionButtons />
    </div>
  );
};
