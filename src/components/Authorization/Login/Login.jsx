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
import { useDispatch, useSelector } from "react-redux";
import { setShops } from "../../store/dataSlice";
import { setNewShopFilter } from "../../store/filterSlice";
// import { setNewShopFilter } from "../../store/filterSlice";

// eslint-disable-next-line react/prop-types
export default function Login({ onLogin }) {
  const { values, handleChange} =
    useFormWithValidation({ email: "", password: ""});

    const shopFilter = useSelector(state => state.filter.shopFilter);

    // const [selectedKey, setSelectedKey] = React.useState("");
    // const [selectedLabel, setSelectedLabel] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const shopNames = useSelector(state => state.data.shopNames);
console.log(values);

  //  useEffect(() => {
  //    // феч запрос за названиями всех магазов
  //    getShops()
  //     .then((data) => {
  //       console.log(data)
  //       dispatch(setShopNames(data))
  //     })
  //     .catch((err) => console.log(`Ошибка: ${err}`)); 
  //  }, []);

   useEffect(() => {
    if (shopFilter.length === 0) {
      getShops()
        .then((data) => {
          console.log(data);
          dispatch(setShops(data))
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  }, [dispatch]);
   

   const handleShopChange = (event) => {
    const { name, value } = event.target;
    if (name === "shop") {
      dispatch(setNewShopFilter(value)); // Отправляем новое значение в Redux
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
                required
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
                required
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
              required
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
              required
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
                value={shopFilter}
                onChange={handleShopChange}
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
                {shopNames.map((shop, index) => (
                    <MenuItem id="shop" name='shop' key={(index + 1)} label={shop.store_name} value={shop.store_name}>{shop.store_name}</MenuItem>
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
