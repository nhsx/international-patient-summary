import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Checkbox, Form, Header, Icon, Segment, Flag } from 'semantic-ui-react';
import { FloatingMenu } from './shared/FloatingMenu';

export const LoginPage = () => {
  return (
    <React.Fragment>
      <FloatingMenu />
      <Container padded compact className="m4 mx-auto p2">
        <Header>International Patient Summary</Header>
        <Header size="tiny">
          <i>United Kingdom</i> <Flag name="uk" />
        </Header>
        <Header size="small">NHS Login</Header>
        <Form>
          <Form.Input label="Email" type="email" placeholder="patient@healthcare-provider.country" />
          <Form.Input label="Password" type="password" placeholder="password" />
          <Button as={Link} to="/patient" type="submit" primary>
            Continue
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};
