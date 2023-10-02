import Logo from "../Logo/Logo";
import Auth from"./Authorization.module.css";
import { useState, useEffect } from "react";
/* eslint-disable */
export default function Authorization({
  children,
  headerText,
  }) {
  
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
      
    </>
  );
}
