import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthenticationContext } from '../components/AuthenticationContextProvider/AuthenticationContext';

// https://youtu.be/RkXv4AXXC_4?t=330

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { authenticate } = useContext(AuthenticationContext);

  return (
    <main className='login-page'>
      <section>
        <h1>Login page</h1>
        {/* // TODO ! dont understand how this higher order fn works - here we pass data from the form */}
      </section>
      <section>
        <form onSubmit={handleSubmit(authenticate)}>
          {/* <form
        onSubmit={handleSubmit((data) => {
          setUser(data);
          setLogin(true);
          const loginToken = 'EDnrQ(vG}!7&*]P';
          document.cookie = `loginToken=${loginToken}`;
          // const token = jwt.sign({ id: data.id }, "secret")

          // jwt.sing... // TODO: if time allows use jwt package to generate a token https://www.npmjs.com/package/jsonwebtoken
        })} */}
          {/* > */}
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
    </main>
  );
};

export { Login };
