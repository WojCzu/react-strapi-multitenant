import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { signIn, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <label>
        Identifier:
        <input
          type="text"
          placeholder="email or username..."
          {...register('identifier', { required: true })}
        />
      </label>
      {errors.identifier && <span>Identifier is required</span>}
      <label>
        Password:
        <input
          type="password"
          placeholder="password..."
          {...register('password', { required: true })}
        />
      </label>
      {errors.password && <span>Password is required</span>}
      <button>Sign in</button>
      {error || ''}
    </form>
  );
};

export default Login;
