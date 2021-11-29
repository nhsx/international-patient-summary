import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

export const RecordButtonHuge = (props: { header: string; linkTo: string; down?: boolean }) => {
  const navigate = useNavigate();
  const stringIcon = `angle ${props.down ? 'down' : 'right'}`;
  return (
    <div
      onClick={() => navigate(props.linkTo)}
      style={{
        // de-style link

        borderRadius: 10,
        border: '1px solid grey',
        margin: '8px 0',
        textAlign: 'center',
        padding: '20px 0',
        cursor: 'pointer',
      }}
    >
      <div style={{ fontSize: '1.1rem' }}>
        <React.Fragment>
          {props.header}
          <Icon name={stringIcon as any} />
        </React.Fragment>
      </div>
    </div>
  );
};
