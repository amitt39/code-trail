function PageHeader({ children }) {
  return (
    <>
      <div className="border-b px-6 py-3 h-12 flex items-center">
        {children}
      </div>
    </>
  );
}

export default PageHeader;
