import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Dropdown, Form, Header, Input, Label } from 'semantic-ui-react';

const AccessCodeInput = () => {
  const [codeSent, setCodeSent] = React.useState(false);
  const navigate = useNavigate();

  const maybeRedirect = () => {
    navigate('/clinician/view');
  };

  if (!codeSent) {
    return (
      <Form className="max-width-2">
        <Form.Field>
          <label>Type in the patient share code:</label>
          <Input placeholder="X X X Y Y Y 0 0 0" />
        </Form.Field>
        <Form.Input label="Name of the clinician requesting access" placeholder="Dr Karen" />
        <Form.Input label="Organisation" placeholder="St Luca's Hospital" />
        <Form.Input label="Country" placeholder="France" />
        <Form.Input label="Reason for access request" placeholder="Patient feels unwell" />
        <Form.Field className="pt2">
          <Button onClick={() => setCodeSent(true)} type="submit" primary>
            Send access request
          </Button>
        </Form.Field>
        <Form.Field>Please inform the patient they will receive a text message containing an access code.</Form.Field>
      </Form>
    );
  }

  return (
    <Form className="max-width-2">
      <Form.Field className="pt2">Type in the 6 digit access code:</Form.Field>
      <Form.Field width={5}>
        <Input labelPosition="left" placeholder="Enter code" />
      </Form.Field>
      <Form.Field className="pt2">
        <Button
          onClick={() => {
            setCodeSent(true);
            maybeRedirect();
          }}
          type="submit"
          primary
        >
          Access the Patient's IPS record
        </Button>
      </Form.Field>
      <Form.Field className="pt2">If the patient has not received the text message,</Form.Field>
      <Form.Field width={5}>
        <Button onClick={() => setCodeSent(true)}>Re-send access request</Button>
      </Form.Field>
      <p>
        If the patient does note have access to their mobile phone, their IPS record might be retrieved via an emergency
        access if they have opted-in to this,
      </p>
    </Form>
  );
};
export const ClinicianRequestAccess = () => {
  return (
    <div>
      <Header>Access a Patient's IPS record</Header>

      <Form>
        <AccessCodeInput />
      </Form>
    </div>
  );
};
