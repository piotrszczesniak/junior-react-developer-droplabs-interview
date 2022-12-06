import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../contexts/UserContext';

// https://youtu.be/RkXv4AXXC_4?t=330

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUser } = useContext(UserContext);

  return (
    <section>
      <h1>Login page</h1>
      {/* // TODO ! dont understand how this higher order fn works - here we pass data from the form */}
      <form onSubmit={handleSubmit(setUser)}>
        <p>{errors.email?.message}</p>
        <input
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Valid email must include @ symbol',
            },
            minLength: {
              value: 3,
              message: 'Minimum length is 3',
            },
          })}
          placeholder='Your email address'
        />
        <p>{errors.password?.message}</p>
        <input
          type='password'
          {...register('password', {
            required: 'This field is required',

            minLength: {
              value: 3,
              message: 'Minimum length is 3',
            },
          })}
          placeholder='Your password'
        />
        <input type='submit' value='Login' />
        {/* https://react-hook-form.com/get-started#Quickstart */}
      </form>
    </section>
  );
};

export { Login };
