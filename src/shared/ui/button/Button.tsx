import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  fluid?: boolean;
}

export const Button: FC<PropsWithChildren<IButton>> = ({ children, className, fluid, ...rest }) => {
  return (
    <button {...rest} className={clsx(className, 'rounded-md bg-teal-200 px-4 py-2 cursor-pointer', fluid && 'w-full')}>
      {children}
    </button>
  );
};
