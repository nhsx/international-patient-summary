import { Link } from 'react-router-dom';
import { Container, Dropdown, Menu, Image } from 'semantic-ui-react';
import logo from '../logo.svg';

export const Navigation = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
        Project Name
      </Menu.Item>
      <Menu.Item as={Link} to="vaccinations">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="vaccinations">
        Vaccinations
      </Menu.Item>
      <Menu.Item as={Link} to="allergies">
        Allergies
      </Menu.Item>

      <Dropdown item simple text="Dropdown" disabled>
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);
