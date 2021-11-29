import { useNavigate } from 'react-router-dom';

export const ActionButtonHuge = (props: { header: string; text: string; linkTo: string }) => {
  const navigate = useNavigate();
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
      <div style={{ fontSize: '1.1rem' }}>{props.header}</div>
      <div style={{ fontSize: '0.8rem' }} className="mt1">
        <p>{props.text}</p>
      </div>
    </div>
  );
};
