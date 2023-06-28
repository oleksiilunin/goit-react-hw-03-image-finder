import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="60"
        width="60"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
