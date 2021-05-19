import {
  Children,
  createElement,
  DetailedHTMLProps,
  FC,
  FormHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
} from "react";
import {
  FieldError,
  FieldElement,
  FieldErrors,
  FieldValues,
  Ref as ReactHookFormRef,
} from "react-hook-form";
import ErrorText from "./errorText";

interface IForm
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children: JSX.Element | JSX.Element[] | Array<JSX.Element | null | string>;
  className?: string;
  register: (ref: (FieldElement & ReactHookFormRef) | null) => void;
  errors: FieldErrors<FieldValues>;
}

interface IInputField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>;
  name: string;
  error?: FieldError;
  className?: string;
  containerClassName?: string;
}

interface ITextArea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  register?:
    | string
    | ((instance: HTMLTextAreaElement | null) => void)
    | RefObject<HTMLTextAreaElement>;
  name: string;
  error?: FieldError;
  className?: string;
  containerClassName?: string;
}

export const Form: FC<IForm> = ({
  register,
  errors,
  children,
  className,
  ...rest
}) => {
  return (
    <form className={`w-full ${className}`} {...rest}>
      {Array.isArray(children)
        ? Children.map(children, (child) => {
            if (!child) return null;
            if (typeof child === "string") return child;
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
          })
        : children.props.name
        ? createElement(children.type, {
            ...{
              ...children.props,
              register: register,
              key: children.props.name,
              error: errors[`${children.props.name}`],
            },
          })
        : children}
    </form>
  );
};

export const InputField: FC<IInputField> = ({
  register,
  name,
  error,
  className,
  containerClassName,
  ...rest
}) => {
  return (
    <div className={`my-2 ${containerClassName}`}>
      <input
        name={name}
        ref={register}
        {...rest}
        className={`border-none rounded-3xl w-full px-5 py-2 outline-none ${className}`}
      />
      <ErrorText>{error && error.message}</ErrorText>
    </div>
  );
};

export const TextArea: FC<ITextArea> = ({
  register,
  name,
  error,
  className,
  containerClassName,
  ...rest
}) => {
  return (
    <div className={`my-2 ${containerClassName}`}>
      <textarea
        name={name}
        ref={register}
        rows={3}
        {...rest}
        className={`border-none rounded-3xl px-4 py-2 w-full outline-none resize-none ${className}`}
      />
      <ErrorText>{error && error.message}</ErrorText>
    </div>
  );
};
