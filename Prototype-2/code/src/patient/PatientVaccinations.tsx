import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Header, Segment, Container, Divider } from 'semantic-ui-react';

export const VaccinationsPage = () => {
  return (
    <div className="m2">
      <Container as={Link} to="/patient/myips">
        <Icon name="angle left" /> Back
      </Container>
      <Divider />
      <Header>Immunisations and Vaccinations</Header>
      <Container text padded>
        <Segment>
          <Header as="h3">12 August 2021</Header>
          <p>Administration of second dose of SARS-COV-2 vaccine</p>
        </Segment>
        <Segment>
          <Header as="h3">17 June 2021</Header>
          <p>Administration of first dose of SARS-COV-2 vaccine</p>
        </Segment>
      </Container>
    </div>
  );
};
