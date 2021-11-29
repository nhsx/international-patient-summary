/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Divider, Button, Header } from 'semantic-ui-react';
import QRCode from '../QR_code_for_mobile_English_Wikipedia.svg';

export const PatientCodesNew = () => {
  return (
    <div className="m2">
      <Header>Details to share</Header>
      <Divider />
      <Header size="small">Share code</Header>
      <Header size="huge" style={{ marginTop: 0 }}>
        {' '}
        T J M S E Y 2 B 8
      </Header>
      <Divider />
      <Header size="small">QR Code version</Header>
      <img src={QRCode} style={{ height: 240 }} alt="QR code" />
      <br />
      <i>This QR code is valid until 15 December 2021</i>
      <Divider />

      <Header size="small">What to do next</Header>
      <ol>
        <li>Give this share code to the person or persons you want to share your IPS record with.</li>
        <li>
          To see your IPS record, they must enter the share code on their IPS access portal or on{' '}
          <b>
            <a>www.#######.nhs.uk</a>
          </b>
        </li>
        <li>
          Once they request access to your IPS, you will receive a text message with a one-time-password. Give them the
          one time password to provide them access to your IPS
        </li>
      </ol>
      <Button as={Link} to="/patient/codes">
        View all codes
      </Button>
    </div>
  );
};
