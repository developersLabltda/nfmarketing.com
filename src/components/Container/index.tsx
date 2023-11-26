const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
