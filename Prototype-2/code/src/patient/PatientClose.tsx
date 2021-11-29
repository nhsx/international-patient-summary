import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Checkbox, Container, Placeholder, Form, Radio } from 'semantic-ui-react';

export const PatientClose = () => {
  const [consentType, setConsentType] = React.useState('unconcious');
  const handleConsentChange = (_e: any, { value }: any) => setConsentType(value);
  const [agreed, setAgreed] = React.useState(false);

  return (
    <div className="m2">
      <Header>Close my IPS</Header>
      <Container text padded>
        <p>
          Your International Patient Summary record shows personal data, such as your details, allergies, intolerances
          and medication. It may also contain your medical history including problems and diagnoses notes. The
          information is for direct patient care only and IPSs will not be used for research or planning by countries or
          third-party organisations Legal opt-out statement:
        </p>
        <Placeholder className="mb3">
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>

        <Form>
          <Form.Field>Select your one of the following options:</Form.Field>
          <Form.Field>
            <Radio
              label="Close my account and keep my IPS record"
              name="consentType"
              value="unconcious"
              checked={consentType === 'unconcious'}
              onChange={handleConsentChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Close my account and delete my IPS record. 
              The underlying information aggregated in your 
              IPS record will not be deleted."
              name="consentType"
              value="express"
              checked={consentType === 'express'}
              onChange={handleConsentChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I have read and agree with the above"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
          </Form.Field>
          <Form.Field>
            <Container textAlign="center">
              <Button disabled={!agreed} as={Link} to="/">
                Close my IPS
              </Button>
            </Container>
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};
