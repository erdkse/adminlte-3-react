import { Outlet } from 'react-router-dom';

export const Content = ({
  containered,
  ...rest
}: {
  containered?: boolean;
} & any) => {
  return (
    <div className="content-wrapper" {...rest}>
      <section className="content">
        <div className={containered ? 'container' : ''}>
          <Outlet />
        </div>
      </section>
    </div>
  );
};
