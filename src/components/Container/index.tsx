const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="container max-w-screen-lg  mx-auto w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;
