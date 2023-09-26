import './App';
import CurrentUserContext from '../../contexts/CurrentUserContext';
// import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';

import { Routes, Route, Navigate } from 'react-router-dom';

import ErrorPage from '../ErrorPage/ErrorPage';
import Registration from '../Authorization/Registration/Registration';
import Login from '../Authorization/Login/Login';
import Main from '../Main/Main';
import ProductDatabase from '../ProductDatabase/ProductDatabase';
import Forecast from '../Forecast/Forecast';
import Statistics from '../Statistics/Statistics';
import Preloader from '../Preloader/Preloader';



const loggedIn = true; // временная заглушка
const currentUser = true; // временная заглушка
const handleRegister = true; // временная заглушка
const formError = true; // временная заглушка
const isActive = false; // временная заглушка
const handleLogin = true; // временная заглушка
const number = '404'; // заглушка
const message = 'err message'; // заглушка


function App() {
  
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signup" // предварительная ручка
            element={!loggedIn 
              ? <Navigate to='/' />
              : <Registration onRegister={handleRegister} formError={formError} />
            }
          />
          <Route
            path="/signin" // предварительная ручка
            element={!loggedIn 
              ? <Navigate to='/' />
              : <Login onLogin={handleLogin} formError={formError} />
            }
            
          />
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route >
            <Route
              path="/forecast" // предварительная ручка
              element={
                <Forecast loggedIn={loggedIn} />
              }
            />
            <Route
              path="/statistics" // предварительная ручка
              element={
                <Statistics/>
              }
            />
            <Route
              path="/productdatabase" // предварительная ручка
              element={
                <ProductDatabase/>
              }
            />
          </Route>
          <Route
            path="*"
            element={<ErrorPage number={number} message={message} />}
          />
        </Routes>
        <Preloader isActive={isActive} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App
