import RegCSS from './Registration.module.css'
import Authorization from "../Authorization";
// import Select from 'react-select'


import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MainBackground from "../../Main/MainBackground/MainBackground";
import React from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click reg')
    // onRegister({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });
  };



return (
    
  <div className={RegCSS.container}>
  <section className={RegCSS.register}>
    <div className={RegCSS.containerAuth}>
      <Authorization
        headerText="Регистрация"
        navSpanBtnLink="/signup"
        spanBtnLinkText="Регистрация"
        classButton="button__indent"
        onSubmit={handleSubmit}
        // isValid={isValid}
        // formError={formError}
        // isDisabled={!isValid ? false : true}
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
              Email
            </InputLabel>
            <Input
              disableUnderline
              id="name"
              type="text"
              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
            />
          </FormControl>
          <FormControl
            id="email"
            label="Email"
            type="email"
            size="normal"
            variant="standard"
            fullWidth
            required
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
              disableUnderline
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
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
            id="name"
            label="Name"
            type="text"
            size="normal"
            variant="standard"
            fullWidth
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
              Имя
            </InputLabel>
            <Input
              disableUnderline
              id="name"
              type="text"
              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
            />
          </FormControl>

          <FormControl
            id="post"
            label="Post"
            type="text"
            size="normal"
            variant="standard"
            fullWidth
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
              Должность
            </InputLabel>
            <Input
              disableUnderline
              id="name"
              type="text"
              sx={{
                border: "1px solid rgba(77, 77, 77, 1)",
                borderRadius: "24px",
                padding: "13px 24px",
                marginBottom: "4px",
              }}
            />
          </FormControl>
        

        
          <Stack spacing={2} direction="row"
            sx={{
              paddingTop: '24px'
            }}
          >
            <Button variant="contained"
              sx={{
                width: '304px',
                height: '60px',
                backgroundColor: 'rgba(0, 60, 150, 1)',
                borderRadius: '46px',
                color: 'white',
                border: '2px solid rgba(0, 60, 150, 1)'

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
                border: '2px solid rgba(0, 60, 150, 1)'

              }}
            >Назад</Button>
            </Link>
            

           </Stack>

        </Box>
      </Authorization>
    </div>
  </section>
  <MainBackground/>
  </div>
);
}
