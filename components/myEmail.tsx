import { myEmail } from "../constants/testIds.const";

const MyEmail = () => {
  return (
    <a
      href="mailto:prabhatpal.14@gmail.com"
      className="flex justify-center items-center px-2 group"
      data-testid={myEmail}
    >
      <span className="brand-icon-email mr-1 group-hover:text-primary-600 group-focus:text-primary-600" />
      prabhatpal.14@gmail.com
    </a>
  );
};

export default MyEmail;
