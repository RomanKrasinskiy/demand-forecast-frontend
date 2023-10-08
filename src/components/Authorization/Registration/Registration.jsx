import RegCSS from './Registration.module.css'
import Authorization from "../Authorization";
// import Select from 'react-select'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MainBackground from "../../Main/MainBackground/MainBackground";
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';


// eslint-disable-next-line react/prop-types
export default function Registration({ onRegister }) {
  
  const [showPassword, setShowPassword] = React.useState(false);
  const { values, handleChange} =
    useFormWithValidation({email: "", password: "", userName: "", usersPosition: ""});



  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {e.preventDefault()};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click reg')
    onRegister({
      email: values.email,
      password: values.password,
      userName: values.userName,
      usersPosition: values.usersPosition
    });

    console.log(values)
  };

return (
    
  <div className={RegCSS.container}>
  <section className={RegCSS.register}>
    <div className={RegCSS.containerAuth}>
      <Authorization
        headerText="Регистрация"
        navSpanBtnLink="/signup"

      >
        <Box sx={{
          width: '100%'
        }}>
          <FormControl
            id="email"
            label="Email"
            type="email"
            size="normal"
            variant="standard"
            fullWidth
            required
            onSubmit={handleSubmit}
          >
            <InputLabel
              htmlFor="standard-adornment-password"
              value={values.email}
              sx={{
                left: "26px",
                top: "16px",
                "&.MuiInputLabel-shrink": {
                  // позиционирование дэйбла в активном состоянии
                  top: "4px",
                  transform: "translate(0, -10px) scale(1)",
                },
                "&.Mui-focused": {
                  color: "rgba(0, 60, 150, 1)", // Погда поле выбрано цвет синий. Добавить валидацию смены цвета на красный при error
                },
              }}
            >
              Email
            </InputLabel>
            <Input
              disableUnderline
              name='email'
              id="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
            />
          </FormControl>

          <FormControl
            id="password"
            label="Password"
            type="password"
            size="normal"
            variant="standard"
            fullWidth
            required
            onSubmit={handleSubmit}

          >
            <InputLabel
              htmlFor="standard-adornment-password"
              sx={{
                left: "26px",
                top: "16px",
                "&.MuiInputLabel-shrink": {
                  // позиционирование дэйбла в активном состоянии
                  top: "4px",
                  transform: "translate(0, -10px) scale(1)",
                },
                "&.Mui-focused": {
                  color: "rgba(0, 60, 150, 1)", // Погда поле выбрано цвет синий. Добавить валидацию смены цвета на красный при error
                },
              }}
            >
              Пароль
            </InputLabel>
            <Input
              name='password'
              disableUnderline
              id="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{
                      color: 'rgba(0, 60, 150, 1)'
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            id="userName"
            name='userName'

            label="Name"
            type="text"
            size="normal"
            variant="standard"
            fullWidth
          >
            <InputLabel
              htmlFor="standard-adornment-userName"
              sx={{
                left: "26px",
                top: "16px",
                "&.MuiInputLabel-shrink": {
                  // позиционирование дэйбла в активном состоянии
                  top: "4px",
                  transform: "translate(0, -10px) scale(1)",
                },
                "&.Mui-focused": {
                  color: "rgba(0, 60, 150, 1)", // Погда поле выбрано цвет синий. Добавить валидацию смены цвета на красный при error
                },
              }}
            >
              Имя
            </InputLabel>
            <Input
              disableUnderline
              name='userName'
              id="userName"
              type="text"
              value={values.userName}
              onChange={handleChange}


              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
            />
          </FormControl>

          <FormControl
            id="usersPosition"
            label="UsersPosition"
            type="text"
            size="normal"
            variant="standard"
            fullWidth
          >
            <InputLabel
              htmlFor="standard-adornment-usersPosition"
              sx={{
                left: "26px",
                top: "16px",
                "&.MuiInputLabel-shrink": {
                  // позиционирование дэйбла в активном состоянии
                  top: "4px",
                  transform: "translate(0, -10px) scale(1)",
                },
                "&.Mui-focused": {
                  color: "rgba(0, 60, 150, 1)", // Погда поле выбрано цвет синий. Добавить валидацию смены цвета на красный при error
                },
              }}
            >
              Должность
            </InputLabel>
            <Input
            name='usersPosition'
              disableUnderline
              id="usersPosition"
              type="text"
              value={values.usersPosition}
              onChange={handleChange}


              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
            />
          <Stack spacing={2} direction="row"
            sx={{
              paddingTop: '24px'
            }}
          >
            <Button variant="contained"
            onClick={handleSubmit}
              sx={{
                width: '304px',
                height: '60px',
                backgroundColor: 'rgba(0, 60, 150, 1)',
                borderRadius: '46px',
                color: 'white',
                border: '2px solid rgba(0, 60, 150, 1)',
                textTransform: 'none',
                fontWeight: '500',
                fontSize: '20px',
                

              }}
            >Зарегистрироваться</Button>

            <Link to='/'>
              <Button variant="outlined"
              sx={{
                width: '160px',
                height: '60px',
                backgroundColor: 'transparent',
                borderRadius: '46px',
                color: 'rgba(0, 60, 150, 1)',
                border: '2px solid rgba(0, 60, 150, 1)',
                textTransform: 'none',
                fontWeight: '500',
                fontSize: '20px',
              }}
            >Назад</Button>
            </Link>
            

           </Stack>

          </FormControl>
        
          

        </Box>
      </Authorization>
    </div>
  </section>
  <MainBackground/>
  </div>
);
}
