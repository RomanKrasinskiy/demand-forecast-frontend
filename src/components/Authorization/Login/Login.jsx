import LoginCSS from "./Login.module.css";
import Authorization from "../Authorization";
import InputForm from "../../InputForm/InputForm";
import { useFormWithValidation } from "../../../hooks/useFormWithValidation";

export default function Login( ) { // onLogin, 
  const { values, handleChange, errors, isValid } =
    useFormWithValidation({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    console.log('click login')

    e.preventDefault();
    // onLogin({
    //   email: values.email,
    //   password: values.password,
    // });
  };

  return (
    <section className={LoginCSS.login}>
      <div className={LoginCSS.container}>
        <Authorization
          headerText="Логин"
          btnText="Войти"
          spanBtnText="Ещё не зарегистрированы?"
          navSpanBtnLink="/signup"
          spanBtnLinkText="Регистрация"
          classButton="button__indent"
          onSubmit={handleSubmit}
          isValid={isValid}
          // formError={formError}
          isDisabled={!isValid ? false : true}
        >
          <InputForm
            type="email"
            name="email"
            required
            label="E-mail"
            value={values.email}
            onChange={handleChange}
            minLength={1}
            maxLength={30}
            spanText={errors.email}
          />

          <InputForm
            type="password"
            name="password"
            required
            label="Пароль"
            spanText={errors.password}
            minLength={1}
            value={values.password}
            onChange={handleChange}
            isValid={isValid}
          />
        </Authorization>
      </div>
    </section>
  );
}
