import MainCss from './Main';
import Authorization from "../Authorization/Authorization";
// import Select from 'react-select'


import { Box, Button, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MainBackground from "../../Main/MainBackground/MainBackground";
import React from 'react';

export default function Registration() {
  const [showPassword, setShowPassword] = React.useState(false);
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

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
    
  <div className={MainCss.container}>
  <section className={MainCss.register}>
    <div className={MainCss.containerAuth}>
      <Authorization
        headerText="Регистрация"
        navSpanBtnLink="/"
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
           </Stack>
        </Box>
      </Authorization>
    </div>
  </section>
  <MainBackground/>
  </div>
);
}
