import { FC } from "react";

const ErrorText: FC = ({ children }) => {
  return (
    <div className="text-red-600 text-sm text-left pl-5 h-6">{children}</div>
  );
};

export default ErrorText;
