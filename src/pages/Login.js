import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../Contexts/UserContext";

// https://youtu.be/RkXv4AXXC_4?t=330

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { setUser } = useContext(UserContext);

  // console.log("errors:", errors);

  return (
    <>
      <h1>Login page</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("data:", data);
          setUser(data);
        })}
      >
        <p>{errors.email?.message}</p>
        <input
          {...register("email", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Minimum lenght is 3"
            }
          })}
          placeholder="Your email address"
        />
        <p>{errors.password?.message}</p>
        <input
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Minimum lenght is 3"
            }
          })}
          placeholder="Your password"
        />

        <input type="submit" />
      </form>
    </>
  );
};

export { Login };
