const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <div className="container max-w-screen-lg mx-auto w-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
