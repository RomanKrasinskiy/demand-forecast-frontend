import Logo from "../Logo/Logo";
import Auth from "./Authorization.module.css";
/* eslint-disable */
export default function Authorization({ children, headerText, isMain }) {
  return (
    <>
      <Logo />
      <h1
        className={isMain ? Auth.headerMain : Auth.header}
        data-content={headerText}
      >
        {headerText}
      </h1>
      <form className={Auth.form}>{children}</form>
    </>
  );
}
