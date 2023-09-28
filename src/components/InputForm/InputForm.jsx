import InputFormCSS from "./InputForm.module.css";
/* eslint-disable */
export default function InputForm({
  type,
  name,
  label,
  spanText,
  onChange,
  minLength,
  maxLength,
}) {

  return (
    <>
      <div className={InputFormCSS.formGroup}>
        <input
          className={`${InputFormCSS.input} ${spanText && InputFormCSS.inputError}`}
          placeholder=" "
          type={type}
          onChange={onChange}
          name={name}
          minLength={minLength}
          maxLength={maxLength}
          required
        />
        <label className={InputFormCSS.label}>{label}</label>
        <span className={InputFormCSS.textError}>{spanText}</span>
      </div>
    </>
  );
}