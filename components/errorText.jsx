const ErrorText = ({ children, testId }) => {
  return (
    <div
      className="text-red-600 text-sm text-left pl-5 h-6"
      data-testid={testId}
    >
      {children}
    </div>
  );
};

export default ErrorText;
