import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email';
  label: string;
  name: string;
  error?: FieldError;
  classes?: {
    root: string;
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type = 'text', error, classes, ...rest }, ref) => {
    return (
      <div className={clsx('flex flex-col w-full mb-2', classes?.root)}>
        {label && (
          <label className="text-sm text-neutral-500" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className="bg-white rounded-sm p-2"
          name={name}
          ref={ref}
          type={type}
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {error?.message && <span className="text-red-500 text-sm pt-1">{error.message}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
