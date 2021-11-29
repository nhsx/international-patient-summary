import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Grid } from 'semantic-ui-react';
import Flag from 'react-world-flags';
import { FloatingMenu } from './shared/FloatingMenu';

export const LandingPage = () => {
  return (
    <React.Fragment>
      <FloatingMenu />
      <Container fluid className="m2 mt4 pt3" textAlign="center">
        <Header as="h3">International Patient Summary</Header>
        <p className="mb3">Continue with your country's national health service.</p>

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="ca" height="64" />
              <br />
              Canada
            </Grid.Column>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="fr" height="64" />
              <br />
              France
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="de" height="64" />
              <br />
              Germany
            </Grid.Column>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="it" height="64" />
              <br />
              Italy
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="jp" height="64" />
              <br />
              Japan
            </Grid.Column>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="gb" height="64" />
              <br />
              United Kingdom
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center" as={Link} to="login">
              <Flag code="us" height="64" />
              <br />
              United States
            </Grid.Column>
            <Grid.Column textAlign="center"></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
