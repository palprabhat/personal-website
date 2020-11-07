import { Children, createElement } from "react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "@hooks/yupValidationResolver";

export const Form = ({ validationSchema, children, onSubmit, className }) => {
  const resolver = useYupValidationResolver(validationSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, register, errors } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`w-full ${className}`}>
      {Children.map(children, (child) => {
        return child.props.name
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

export const InputField = ({ register, name, error, ...rest }) => {
  return (
    <div className="my-2">
      <input
        name={name}
        ref={register}
        {...rest}
        className="border-none rounded-3xl w-full px-5 py-2 outline-none"
      />
      <div className="text-red-600 text-sm text-left pl-5 h-6">
        {error && error.message}
      </div>
    </div>
  );
};

export const TextArea = ({ register, name, error, ...rest }) => {
  return (
    <div className="my-2">
      <textarea
        name={name}
        ref={register}
        {...rest}
        rows="3"
        className="border-none rounded-3xl px-4 py-2 w-full outline-none resize-none"
      />
      <div className="text-red-600 text-sm text-left pl-4 h-6">
        {error && error.message}
      </div>
    </div>
  );
};
