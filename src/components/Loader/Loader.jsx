import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <RotatingLines width="50" strokeColor="blue" />
    </div>
  );
};

export default Loader;
