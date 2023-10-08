import LoginCSS from "./Login.module.css";
import Authorization from "../Authorization";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, FormControl, Input, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import MainBackground from "../../Main/MainBackground/MainBackground";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../../hooks/useFormWithValidation";
import { getShops } from "../../../api/DataApi";

// eslint-disable-next-line react/prop-types
export default function Login({ onLogin }) {
  const { values, handleChange} =
    useFormWithValidation({ email: "", password: "", shop: "" });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const data = [
  //   {"store": "asd31ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыывввввввввввввввввввввв",
  //     "city": "erert",
  //     "division": "tuy5r",
  //     "type_format": 1,
  //     "loc": 3,
  //     "size":19,
  //     "is_active": 0},
  //   {"store": "dd21",
  //     "city": "derg",
  //     "division": "tsdfr",
  //     "type_format": 3,
  //     "loc": 5,
  //     "size":31,
  //     "is_active": 1},
  //     {"store": "d1d1",
  //     "city": "derg",
  //     "division": "tsdfr",
  //     "type_format": 3,
  //     "loc": 5,
  //     "size":31,
  //     "is_active": 1},
  //     {"store": "d4d1",
  //     "city": "derg",
  //     "division": "tsdfr",
  //     "type_format": 3,
  //     "loc": 5,
  //     "size":31,
  //     "is_active": 1},
  //     {"store": "dd51",
  //     "city": "derg",
  //     "division": "tsdfr",
  //     "type_format": 3,
  //     "loc": 5,
  //     "size":31,
  //     "is_active": 1},
  //     {"store": "dd61",
  //     "city": "derg",
  //     "division": "tsdfr",
  //     "type_format": 3,
  //     "loc": 5,
  //     "size":31,
  //     "is_active": 1},
  //     {"store": "dd71",
  //     "city": "derg",
  //     "division": "tsdfr",
  //     "type_format": 3,
  //     "loc": 5,
  //     "size":31,
  //     "is_active": 1},
  //  ];
  
// const [shops] = React.useState(data); // в стейт
const [shops, setShop] = React.useState([]); // в стейт

   useEffect(() => {
     // феч запрос за названиями всех магазов
     getShops()
      .then((data) => {
        setShop(data)
        
      })
      .catch((err) => console.log(`Ошибка: ${err}`)); 
   }, []);

  const handleSubmit = (e) => {
    console.log("click login");
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
      shop: values.shop,
    });
  };

  return (
    
    <div className={LoginCSS.container}>
    <section className={LoginCSS.login}>
      <div className={LoginCSS.containerAuth}>
        <Authorization
          headerText="Логин"
          btnText="Войти"
          spanBtnText="Ещё не зарегистрированы?"
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
              value={values.email}
              fullWidth
              required
            >
              <InputLabel
                htmlFor="standard-adornment-email"
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
                value={values.email}
                onChange={handleChange}
                id="email"
                name='email'
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
            id="password"
            label="Password"
            type="password"
            size="normal"
            variant="standard"
            fullWidth
            required
            value={values.password}
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
            id="shop"
            name ='shop'
            label="shop"
            size="normal"
            variant="standard"
            onSubmit={handleSubmit}
            fullWidth
            sx={{
              overflow: "hidden", // Скрываем часть текста, которая не помещается
              whiteSpace: "nowrap", // Запрещаем переносить текст на новую строку
              textOverflow: "ellipsis",
            }}
            required>
              <InputLabel  id="demo-simple-select-shop"
              
                sx={{
                  left: "26px",
                  top: "16px",
                  width: '100%',
                  
                  "&.MuiInputLabel-shrink": {
                    // позиционирование дэйбла в активном состоянии
                    top: "4px",
                    transform: "translate(0, -8px) scale(1)",
                  },
                  "&.Mui-focused": {
                    color: "rgba(0, 60, 150, 1)", // Погда поле выбрано цвет синий. Добавить валидацию смены цвета на красный при error
                  },

                }}>Торговый комплекс</InputLabel>
              <Select
                labelId="demo-simple-select-shop"
                id="shop"
                name='shop'
                value={values.shop}
                onChange={handleChange}
                label="shop"
                disableUnderline
                sx={{
                  border: "1px solid rgba(77, 77, 77, 1)",
                  borderRadius: "24px",
                  padding: "13px 24px",
                  marginBottom: "4px",
                  
                  '& .MuiSvgIcon-root': {
                    right: '32px',
                  }
                  
                }}
                
              >
                {shops.map((shop) => (
                    // <MenuItem id="shop" name='shop' key={`${shop.city}-${shop.store}`} value={values.shop}>{`${shop.city} ${shop.store}`}</MenuItem>
                    <MenuItem id="shop" name='shop' onClick={handleChange} key={`${shop.city}-${shop.store_name}`} value={shop.store_name}>{`${shop.city} ${shop.store_name}`}</MenuItem>
                  ))}
                
              </Select>
            </FormControl>
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
              >Войти</Button>
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
          </Box>
        </Authorization>
      </div>
    </section>
    <MainBackground/>
    </div>
  );
}
