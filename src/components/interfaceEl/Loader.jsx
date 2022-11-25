import { Watch } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div role="alert">
      <div>
        {/* Params spinner Watch */}
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
          }}
          wrapperClassName=""
          visible={true}
        />
        Loading...
      </div>
    </div>
  );
}
