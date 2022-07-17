import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { registerUser, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <label>
        Email:
        <input
          type="email"
          placeholder="email..."
          {...register('email', { required: true })}
        />
      </label>
      {errors.email && <span>Email is required</span>}
      <label>
        Username:
        <input
          type="text"
          placeholder="username..."
          {...register('username', { required: true })}
        />
      </label>
      {errors.username && <span>Username is required</span>}
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

export default Register;
