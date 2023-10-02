import { useState, useCallback } from "react";
// import isEmail from 'validator/es/lib/isEmail';
import { REGEX_NAME, REGEX_EMAIL } from "../utils/constants";

//хук управления формой и валидации формы
export function useFormWithValidation(inputValues) {
  const [values, setValues] = useState(inputValues);

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;

    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });

    if (value.length < 1) {
      setErrors((state) => ({ ...state, [name]: "Это обязательное поле" }));
      setIsValid(false);
      return;
    } else if (name === "name" && value.length < 2) {
      setErrors((state) => ({
        ...state,
        [name]: "Имя должно быть не менее 2 символов",
      }));
      setIsValid(false);
    } else if (name === "name" && !REGEX_NAME.test(value)) {
      setErrors((state) => ({
        ...state,
        [name]: "Имя может содержать только буквы, пробел и дефис",
      }));
      setIsValid(false);
      return;
    } else if (name === "email" && !REGEX_EMAIL.test(value)) {
      setErrors((state) => ({
        ...state,
        [name]: "Некорректный e-mail. Проверьте формат",
      }));
      setIsValid(false);
      return;
    } else if (name === "name" && value.length > 30) {
      setErrors((state) => ({
        ...state,
        [name]: "Имя должно быть меньше 30 символов",
      }));
      setIsValid(false);
      return;
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, setIsValid, resetForm };
}
