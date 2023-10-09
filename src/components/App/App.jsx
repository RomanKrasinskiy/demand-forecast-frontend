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
import { signUp, signIn, signOut } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserEmail, setNewUserName, setNewUserOccupation, setloggedIn } from "../store/userSlice";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

function App() {
  const navigate = useNavigate();
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();


  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    userName: "",
    usersPosition: "",
    id: "",
  });


  // useEffect(() => {
  //   tokenCheck();
  // }, [loggedIn]);

  // function tokenCheck() {
  //   const jwt = localStorage.getItem("auth_token");
  //   if (!jwt) {
  //     navigate('/');
  //   } else {      
  //         navigate(location.pathname);
  //       }
       
  //   }
  
  function handleRegister({ email, password, userName, usersPosition }) {
    // setIsLoading(true)
      signUp({ email, password, userName, usersPosition })
        .then(() => {
          navigate('/signin')
          

        })
        .catch((err) => console.log(`Ошибка: ${err}`));
      // .finally(() => setIsLoading(false));
  }
  function handleLogin({ email, password, shop }) {
    // setIsLoading(true)      
      signIn({ email, password, shop })
        .then((data) => {
          dispatch(setloggedIn(true))
          localStorage.setItem("auth_token", data.auth_token);
          console.log(data)
          dispatch(setNewUserName(data.userName))
          dispatch(setNewUserOccupation(data.usersPosition))
          dispatch(setNewUserEmail(data.email))
          // setLoggedIn(true);
          navigate('/productdatabase')
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
      // .finally(() => setIsLoading(false));
  }
  const handleSignOut = () => {
    // setIsLoading(true);
    signOut()
      .then(() => {
        navigate('/');
        console.log('exit')
        setCurrentUser({ name: '', email: '' });
        // setLoggedIn(false);

        // setFormError({ isError: false, text: '' });
        // setSearchedProduct([]);
        localStorage.clear();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
      // .finally(() => setIsLoading(false));
  };


  return (
    <div className={AppCSS.app}>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/signup" // предварительная ручка
            element={
              loggedIn ? (
                <Navigate to="/productdatabase" />
              ) : (
                <Registration onRegister={handleRegister} />
              )
            }
          />
          <Route
            path="/signin" // предварительная ручка
            element={loggedIn ? <Navigate to="/productdatabase" /> : <Login onLogin={handleLogin}/>}
          />
          <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
            <Route
              path="/productdatabase"
              element={
                <>
                  <Header onSignOut={handleSignOut} />
                  <ProductDatabase />
                </>
              }
            />
            <Route
              path="/forecast" // предварительная ручка
              element={
                <>
                  <Header onSignOut={handleSignOut} />
                  <Forecast />
                </>
              }
            />
            <Route
              path="/statistics" // предварительная ручка
              element={
                <>
                  <Header onSignOut={handleSignOut} />
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
