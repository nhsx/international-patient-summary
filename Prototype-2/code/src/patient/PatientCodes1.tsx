import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Form, Divider, Button, Header, Checkbox, Icon } from 'semantic-ui-react';
import QRCode from '../QR_code_for_mobile_English_Wikipedia.svg';

export const ShouldRemoveShareCode1Value = {
  value: false,
};

export const PatientCodes1 = () => {
  const [agreed, setAgreed] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return (
    <div className="m2">
      <Header>Details to share</Header>
      <Divider />
      <Header size="small">Share code</Header>
      <Header size="huge" style={{ marginTop: 0 }}>
        {' '}
        T J M S E Y 2 B 8
      </Header>
      <i>This QR code is valid until 22 December 2021</i>
      <Divider />
      <Header size="small">QR Code version</Header>
      <img src={QRCode} style={{ height: 240 }} alt="QR code" />
      <br />
      <i>This QR code is valid until 22 December 2021</i>
      <Divider />
      <Accordion>
        <Accordion.Title active={active} onClick={() => setActive(!active)}>
          Access history <Icon name="angle down" />
        </Accordion.Title>
        <Accordion.Content active={active}>
          <p>Access approved - 22 Oct 2021 05:33 GMT</p>
          <p>Access requested - 20 Oct 2021 11:00 GMT</p>
          <p>Code generated - 20 Oct 2021 10:58 GMT</p>
        </Accordion.Content>
      </Accordion>

      <Divider />
      <Header size="small">Remove this share code</Header>
      <p></p>
      <Form>
        <Form.Field>
          <Checkbox
            label="I confirm want to remove this share code. The share code will expire, you will not be able to share your IPS
              record with this code anymore and the persons you provided this code with will not be able to access your IPS
              record"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
        </Form.Field>
        <Button
          as={Link}
          to="/patient/codes"
          disabled={!agreed}
          onClick={() => (ShouldRemoveShareCode1Value.value = true)}
        >
          Remove this share code
        </Button>
      </Form>
    </div>
  );
};
