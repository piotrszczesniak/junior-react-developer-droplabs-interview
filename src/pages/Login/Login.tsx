import { useContext } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { AuthenticationContext } from '../../components/AuthenticationContextProvider/AuthenticationContext';
import styles from './Login.module.scss';
import { Navigate } from 'react-router-dom';
import { UserType } from '../../types/types';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const { authenticate, isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <Navigate to='/products' />;
  }

  return (
    <main className='login-page'>
      <section>
        <h1>Login</h1>
      </section>
      <section>
        <form
          className={styles['login-form']}
          onSubmit={handleSubmit((data: FieldValues) => {
            authenticate({ email: data.email, password: data.password });
          })}
        >
          <p className={styles['error-msg']}>{errors.email?.message}</p>
          <input
            type='text'
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^\S+@\S+$/,
                message: 'E-mail address has to cointain @ character',
              },
              minLength: {
                value: 3,
                message: 'Min 3 characters are required',
              },
            })}
            placeholder='Your e-mail address'
          />
          <p className={styles['error-msg']}>{errors.password?.message}</p>
          <input
            type='password'
            {...register('password', {
              required: 'This field is required',

              minLength: {
                value: 3,
                message: 'Min 3 characters are required',
              },
            })}
            placeholder='Your password'
          />
          <button type='submit'>Login</button>

          {!isAuthenticated && <p className={styles['error-msg']}>To see the products you need to login.</p>}
        </form>
      </section>
    </main>
  );
};

export { Login };
