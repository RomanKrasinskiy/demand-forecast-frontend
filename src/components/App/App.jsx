import "./App";
import CurrentUserContext from "../../contexts/CurrentUserContext";
// import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import AppCSS from "./App.module.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import Registration from "../Authorization/Registration/Registration";
import Login from "../Authorization/Login/Login";
import Main from "../Main/Main";
import Forecast from "../Forecast/Forecast";
import Statistics from "../Statistics/Statistics";
// import Preloader from "../Preloader/Preloader";
import ProductDatabase from "../ProductDatabase/ProductDatabase";
import Header from "../Header/Header";
import { useState } from "react";
import { auth } from "../../api/AuthApi";

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    userName: "",
    usersPosition: "",
    id: "",
  });

  function handleRegister({ email, password, userName, usersPosition }) {
    // setIsLoading(true)
    auth
      .register({ email, password, userName, usersPosition })
      .then(() => {
        navigate('/signin')
      })
      // .catch((err) => setFormError({ isError: true, text: err.message })) // Уточнить у дизайнеров, будет ли валидация полей
      // .finally(() => setIsLoading(false));
  }


  return (
    <div className={AppCSS.app}>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/signup" // предварительная ручка
            element={
              loggedIn ? (
                <Navigate to="/forecast" />
              ) : (
                <Registration onRegister={handleRegister} />
              )
            }
          />
          <Route
            path="/signin" // предварительная ручка
            element={loggedIn ? <Navigate to="/forecast" /> : <Login />}
          />
          <Route>
            <Route
              path="/productdatabase" // предварительная ручка
              element={
                <>
                  <Header />
                  <ProductDatabase />
                </>
              }
            />
            <Route
              path="/forecast" // предварительная ручка
              element={
                <>
                  <Header />
                  <Forecast />
                </>
              }
            />
            <Route
              path="/statistics" // предварительная ручка
              element={
                <>
                  <Header />
                  <Statistics />
                </>
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Preloader  /> */}
        {/* isActive={isActive} */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
