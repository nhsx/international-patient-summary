import { Link } from 'react-router-dom';
import { Button, Header, Container } from 'semantic-ui-react';

export const PatientShareIps = () => {
  return (
    <div className="m2">
      <Header>Share my IPS</Header>
      <Container text padded>
        <p>
          You can give 3rd parties healthcare professionals access to your International Patient Summary record by
          creating a share code.
        </p>
        <p>
          By default, the share code will be valid for 30 days from when it's generated. You can revoke the share code
          validity at any point.
        </p>

        <Container textAlign="center">
          <Button as={Link} to="/patient/codes/new">
            Create a share code
          </Button>
        </Container>
      </Container>
    </div>
  );
};
