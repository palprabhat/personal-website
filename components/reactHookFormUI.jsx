import { Children, createElement } from "react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "@hooks/yupValidationResolver";
import ErrorText from "./errorText";

export const Form = ({ validationSchema, children, onSubmit, className }) => {
  const resolver = useYupValidationResolver(validationSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, register, errors } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`w-full ${className}`}>
      {Children.map(children, (child) => {
        return child.props?.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register: register,
                key: child.props.name,
                error: errors[`${child.props.name}`],
              },
            })
          : child;
      })}
    </form>
  );
};

export const InputField = ({ register, name, error, ariaLabel, ...rest }) => {
  return (
    <div className="my-2">
      <input
        name={name}
        ref={register}
        {...rest}
        aria-label={ariaLabel}
        className="border-none rounded-3xl w-full px-5 py-2 outline-none"
      />
      <ErrorText>{error && error.message}</ErrorText>
    </div>
  );
};

export const TextArea = ({ register, name, error, ariaLabel, ...rest }) => {
  return (
    <div className="my-2">
      <textarea
        name={name}
        ref={register}
        {...rest}
        aria-label={ariaLabel}
        rows="3"
        className="border-none rounded-3xl px-4 py-2 w-full outline-none resize-none"
      />
      <ErrorText>{error && error.message}</ErrorText>
    </div>
  );
};
