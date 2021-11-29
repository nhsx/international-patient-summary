import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';
import { ShouldRemoveShareCode1Value } from './PatientCodes1';

const codes = [
  { gen: '03 Nov 2021 03:00 GMT', expires: '20 Dec 2021 03:00 GMT', lastUsed: '03 Nov 2021 03:30 GMT' },
  { gen: '02 Nov 2021 02:00 GMT', expires: '10 Dec 2021 02:00 GMT', lastUsed: '02 Nov 2021 02:30 GMT' },
  { gen: '01 Nov 2021 01:00 GMT', expires: '01 Dec 2021 01:00 GMT', lastUsed: '01 Nov 2021 01:30 GMT' },
  {
    gen: '31 July 2021 11:00 GMT',
    expires: '30 Sep 2021 11:00 GMT',
    lastUsed: '01 Aug 2021 14:03 GMT',
    disabled: true,
  },
  { gen: '01 May 2020 10:00 GMT', expires: '05 May 2021 10:00 GMT', lastUsed: '01 May 2021 10:05 GMT', disabled: true },
];

export const PatientCodes = () => {
  return (
    <div className="m2">
      <Header>Share codes</Header>
      <p>Below is a list of sharing codes you previously generated.</p>
      <List divided relaxed>
        {codes.map((code, idx) => {
          return (
            <List.Item style={{ opacity: code.disabled || (idx === 0 && ShouldRemoveShareCode1Value.value) ? 0.4 : 1 }}>
              <List.Icon name="qrcode" size="big" verticalAlign="middle" />
              <List.Content as={Link} to="/patient/codes/1">
                <List.Description style={{ lineHeight: 1.5, color: 'black' }}>
                  Generated: {code.gen}
                  <br />
                  Expires: {code.expires}
                  <br />
                  Last used: {code.lastUsed}
                  <br />
                </List.Description>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};
