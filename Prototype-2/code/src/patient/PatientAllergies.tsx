import React from 'react';
import { Button, Checkbox, Icon, Table, Header } from 'semantic-ui-react';

import { LanguageContext } from '../shared/LanguageContext';

import { allergyData } from '../data/allergies';

const AllergiesTable = () => {
  const data = allergyData;
  return (
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((row) => (
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>{row.allergyName}</Table.Cell>
            <Table.Cell>{row.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="4">
            <Button floated="right" icon labelPosition="left" primary size="small">
              <Icon name="user" /> Share
            </Button>
            <Button size="small">Allow access</Button>
            <Button disabled size="small">
              Allow access to all
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export const AllergiesPage = () => {
  const { i18n } = React.useContext(LanguageContext);

  return (
    <React.Fragment>
      <Header>{i18n('allergiesHeader')}</Header>
      <AllergiesTable />
    </React.Fragment>
  );
};
