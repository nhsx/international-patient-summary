import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Form, Header, Icon, Input, Label, Menu, Table } from 'semantic-ui-react';

const PatientsTable = (props: { searchClicked: boolean }) => {
  const patients = !props.searchClicked
    ? []
    : [
        { firstName: 'Karen', lastName: 'Smith', dob: '10 Mar 1982', sex: 'Female' },
        { firstName: 'Sebastian', lastName: 'McCartney', dob: '31 Aug 1985', sex: 'Male' },
        { firstName: 'Paul', lastName: 'Doppelganger', dob: '01 Jan 1990', sex: 'Male' },
      ];
  return (
    <Table celled compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>DoB</Table.HeaderCell>
          <Table.HeaderCell>Sex</Table.HeaderCell>
          <Table.HeaderCell>IPS Record link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {patients.map((patient) => {
          return (
            <Table.Row>
              <Table.Cell>{patient.firstName}</Table.Cell>
              <Table.Cell>{patient.lastName}</Table.Cell>
              <Table.Cell>{patient.dob}</Table.Cell>
              <Table.Cell>{patient.sex}</Table.Cell>
              <Table.Cell>
                <Link to="../view">IPS Record</Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export const ClinicianEmergency = () => {
  const [searchClicked, setSearchClicked] = React.useState(false);
  return (
    <div>
      <Header>Emergency access</Header>
      <div>
        <Form>
          <Form.Group>
            <Form.Input label="First Name" placeholder="John" />
            <Form.Input label="Last Name" placeholder="Appleseed" />
            <Form.Input label="Date of Birth" placeholder="Appleseed" />
            {/* <Form.Dropdown
              label="Sex"
              placeholder="Sex"
              selection
              options={[
                { key: 'female', text: 'Female' },
                { key: 'male', text: 'Male' },
              ]}
            /> */}
            <Form.Field>
              <Button
                icon
                labelPosition="left"
                style={{ marginTop: 24 }}
                primary
                onClick={() => {
                  setSearchClicked(true);
                }}
              >
                <Icon name="search" />
                Search
              </Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
      <div>
        <PatientsTable searchClicked={searchClicked} />
      </div>
    </div>
  );
};
