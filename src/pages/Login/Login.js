import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthenticationContext } from '../../components/AuthenticationContextProvider/AuthenticationContext';
import styles from './Login.module.scss';

// https://youtu.be/RkXv4AXXC_4?t=330

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { authenticate, isAuthenticated } = useContext(AuthenticationContext);

  return (
    <main className='login-page'>
      <section>
        <h1>Logowanie</h1>
      </section>
      <section>
        <form className={styles['login-form']} onSubmit={handleSubmit(authenticate)}>
          <p className={styles['error-msg']}>{errors.email?.message}</p>
          <input
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

          {isAuthenticated ? (
            <p className={styles['success-msg']}>Jesteś zalogowany</p>
          ) : (
            <p className={styles['error-msg']}>Żeby przeglądać ofertę produktów zaloguj się proszę.</p>
          )}
        </form>
      </section>
    </main>
  );
};

export { Login };
