import React from 'react';
import { Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const IconButtonStyle: React.CSSProperties = {
  textAlign: 'center',
  margin: 4,
};

export const FloatingMenu = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={IconButtonStyle}>
          <Container as={Link} to="/patient">
            <Icon name="home" />
            <br />
            Home
          </Container>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={IconButtonStyle}></div>
          <div style={IconButtonStyle}>
            <Container as={Link} to="/patient">
              <Icon name="translate" />
              <br />
              Language
            </Container>
          </div>
          <div style={IconButtonStyle}>
            <Container as={Link} to="/patient">
              <Icon name="ellipsis horizontal" />
              <br />
              More
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
