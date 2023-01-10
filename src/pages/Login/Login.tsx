import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthenticationContext } from '../../components/AuthenticationContextProvider/AuthenticationContext';
import styles from './Login.module.scss';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { authenticate, isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <Navigate to='/products' />;
  }

  return (
    <main className='login-page'>
      <section>
        <h1>Logowanie</h1>
      </section>
      <section>
        <form className={styles['login-form']} onSubmit={handleSubmit(authenticate)}>
          <p className={styles['error-msg']}>{errors.email?.message}</p>
          <input
            type='text'
            {...register('email', {
              required: 'To pole jest obowiązkowe',
              pattern: {
                value: /^\S+@\S+$/,
                message: 'Adres email musi zawierać w sobie symbol @',
              },
              minLength: {
                value: 3,
                message: 'Wymagane są minimum 3 znaki',
              },
            })}
            placeholder='Twój adres email'
          />
          <p className={styles['error-msg']}>{errors.password?.message}</p>
          <input
            type='password'
            {...register('password', {
              required: 'To pole jest obowiązkowe',

              minLength: {
                value: 3,
                message: 'Wymagane są minimum 3 znaki',
              },
            })}
            placeholder='Twoje hasło'
          />
          <button type='submit'>Zaloguj</button>

          {!isAuthenticated && <p className={styles['error-msg']}>Żeby przeglądać ofertę produktów zaloguj się proszę.</p>}
        </form>
      </section>
    </main>
  );
};

export { Login };
