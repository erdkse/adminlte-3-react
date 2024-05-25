const Loading = ({
  show
}: {
  show?: 'dark' | boolean;
}) => {
  return (
    <>
      {show && (
        <div className={`overlay ${typeof show === 'string' && show}`}>
          <i className="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
      )}
    </>
  );
};

export default Loading;