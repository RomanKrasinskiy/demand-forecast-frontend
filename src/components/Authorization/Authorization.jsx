import Logo from "../Logo/Logo";
import Auth from"./Authorization.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
/* eslint-disable */
export default function Authorization({
  children,
  headerText,
  btnText,
  spanBtnText,
  navSpanBtnLink,
  spanBtnLinkText,
  isValid,
  onSubmit,
  formError}) {
  
  const [errorText, setErrorText] = useState('');
//   useEffect(() => {
//     setErrorText(formError.isError ? formError.text : '');
//   }, [formError]);

  useEffect(() => {
    setErrorText('');
  }, []);
  
  return (
    <>
      <Logo />
      <h1 className={Auth.header}>{headerText}</h1>
      <form className={Auth.form}>{children}</form>
      <span className={Auth.formError}>{errorText}</span>
      <button
        className={`${Auth.buttonSubmit} ${!isValid && Auth.buttonSubmitDisabled}`}
        type="submit"
        disabled={isValid ? false : true}
        onClick={onSubmit}
      >
        {btnText}
      </button>
      <div className={Auth.btnContainer}>
        <span className={Auth.btnAsk}>{spanBtnText}</span>
        <Link className={Auth.btnLink} to={navSpanBtnLink}>
          {spanBtnLinkText}
        </Link>
      </div>
    </>
  );
}
