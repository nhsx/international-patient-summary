import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Container, Form, Radio } from 'semantic-ui-react';

export const PatientIpsPreferencesConsent = () => {
  const [consentType, setConsentType] = React.useState('unconscious');
  const [consentTypeChanged, setConsentTypeChanged] = React.useState(false);
  const handleConsentChange = (_e: any, { value }: any) => {
    setConsentType(value);
    setConsentTypeChanged(true);
  };

  return (
    <div className="m2">
      <Header>My preferences</Header>
      <Container text padded>
        <Form>
          <Form.Field>Select your one of the following options:</Form.Field>
          <Form.Field>
            <Radio
              label="I allow my IPS record to be accessed if I am unconscious or incapable of giving consent in an emergency"
              name="consentType"
              value="unconscious"
              checked={consentType === 'unconscious'}
              onChange={handleConsentChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="I do NOT allow my IPS record to be accessed without my express consent, even in case of emergency"
              name="consentType"
              value="express"
              checked={consentType === 'express'}
              onChange={handleConsentChange}
            />
          </Form.Field>
          <Form.Field>
            <Container textAlign="center">
              <Button disabled={!consentTypeChanged} as={Link} to="">
                Change my preferences
              </Button>
            </Container>
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};
