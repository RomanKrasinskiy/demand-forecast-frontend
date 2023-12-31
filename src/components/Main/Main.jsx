import MainCss from "./Main.module.css";
import Authorization from "../Authorization/Authorization";
// import Select from 'react-select'
import { Box, Button, Stack } from "@mui/material";
import MainBackground from "../Main/MainBackground/MainBackground";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className={MainCss.container}>
      <section className={MainCss.main}>
        <div className={MainCss.containerAuth}>
          <Authorization headerText="Добро пожаловать в Ленту" isMain={true}>
            <h3 className={MainCss.subtitle}>
              Этот сервис поможет вам визуазировать прогноз спроса на 14 дней в
              будущее
            </h3>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Stack spacing={2} direction="column" width={100}>
                <Link to="/signin">
                  <Button
                    variant="contained"
                    sx={{
                      width: "304px",
                      height: "60px",
                      backgroundColor: "rgba(0, 60, 150, 1)",
                      borderRadius: "46px",
                      color: "white",
                      border: "2px solid rgba(0, 60, 150, 1)",
                      textTransform: "none",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Войти
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="outlined"
                    sx={{
                      width: "304px",
                      height: "60px",
                      backgroundColor: "transparent",
                      borderRadius: "46px",
                      color: "rgba(0, 60, 150, 1)",
                      border: "2px solid rgba(0, 60, 150, 1)",
                      textTransform: "none",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Зарегистрироваться
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Authorization>
        </div>
      </section>
      <MainBackground />
    </div>
  );
}
