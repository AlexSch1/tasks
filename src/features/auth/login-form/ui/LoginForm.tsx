'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/shared/ui/input/Input';
import { Button } from '@/shared/ui/button/Button';
import css from './LoginForm.module.scss';
import clsx from 'clsx';
import { EMAIL_VALIDATION } from '@/shared/constants/validations';
import Heading from '@/shared/ui/heading/Heading';

export interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      className={clsx('w-1/3 m-auto shadow rounded-xl p-layout p-10 flex flex-col items-center', css.form)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading title="Log In" />

      <Input
        label="Email"
        type="email"
        defaultValue="test@test.com"
        {...register('email', {
          required: 'Required field',
          pattern: {
            value: EMAIL_VALIDATION,
            message: 'Entered value does not match email format',
          },
        })}
        error={errors.email}
        classes={{ root: 'mb-5' }}
      ></Input>

      <Input
        label="Password"
        type="password"
        {...register('password', {
          required: 'Required field',
          minLength: {
            value: 4,
            message: 'min length is 4',
          },
        })}
        error={errors.password}
        classes={{ root: 'mb-5' }}
      ></Input>

      <Button fluid>Войти</Button>
    </form>
  );
};

export default LoginForm;
