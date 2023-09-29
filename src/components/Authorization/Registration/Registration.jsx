import RegistrationCSS from "./Registration.module.css";
import './Registration.css';
import Authorization from "../Authorization";
import InputForm from "../../InputForm/InputForm";
import Select from 'react-select'


import { useFormWithValidation } from "../../../hooks/useFormWithValidation";

export default function Register() {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click reg')
    // onRegister({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });
  };
const options = [
  // { value: 'tk', label: 'TK', isDisabled: true, },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


  return (
    <section className={RegistrationCSS.register}>
      <div className={RegistrationCSS.container}>
        <Authorization
          headerText="Регистрация"
          btnText="Зарегистрироваться"
          spanBtnText="Уже зарегистрированы?"
          navSpanBtnLink="/signin"
          spanBtnLinkText="Войти"
          onSubmit={handleSubmit}
          isValid={isValid}
          isDisabled={!isValid ? false : true}
          // formError={formError}
        >
          <InputForm
            type="text"
            name="name"
            required
            label="Имя"
            value={values.name}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            spanText={errors.name}
          />
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
          <InputForm
            type="text"
            name="post"
            required
            label="Должность"
            value={values.post}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            spanText={errors.post}
          />
          
          <Select
            options={options}
            name="select"
            
            placeholder={'Торговый комплекс'}
            classNamePrefix='custom-select'
            className='custom-select-container'
            defaultValue={'Торговый комплекс'}
            Select
            label={options[0]}
            required
            // onChange={handleChange}
            // isValid={isValid}
          />
          
        </Authorization>
      </div>
    </section>
  );
}
