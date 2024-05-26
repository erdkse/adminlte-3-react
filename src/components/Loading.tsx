import { Image } from '@profabric/react-components';

export const Loading = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <Image
        className="animation__shake"
        src="/img/logo.png"
        alt="AdminLTELogo"
        height={60}
        width={60}
      />
    </div>
  );
};
