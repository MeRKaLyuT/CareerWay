// mui
import { Box, Typography, Button, Container, Divider } from '@mui/material';
// other
import React from 'react';
import { BtnRoadmap } from '../components/common/btnRoadmap';
import { setAuth } from '../services/setAuth';


const Home = ()  => {

  const isAuth =setAuth();

    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: "2em", }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Добро пожаловать в CareerWay
            </Typography>
            <Typography variant="h6" color="#404040" gutterBottom>
              Изучайте информативные и легкие для вашего восприятия блоки знаний для достижения ваших целей.
              Следите за прогрессом и открывайте новые возможности!
            </Typography>
          </Container>

          <Box sx={{width: "100%", display: "flex", alignItems: "center", my: 3}}>
            <Divider sx={{flexGrow: 1, borderColor: "rgba(0,0,0)"}}/>
            <Typography variant="body1" sx={{
              mx: 2,
              py: 0.5,
              px: 2,
              backgroundColor: "rgb(0, 0, 0)",
              borderRadius: "14px",
              border: "1px solid rgba(0,0,0,0.2)",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "white",
            }}>
              Роадмапы
            </Typography>
            <Divider sx={{flexGrow: 1, borderColor: "rgba(0,0,0)"}} />
          </Box>
          

          <Box 
            sx={{
              width: "100%", 
              maxWidth: "100vw", 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',

            }}
            >

              <BtnRoadmap text={"Backend-Разработчик"} href={"/roadmap/backender"} />
          </Box>

            <Box sx={{
                backgroundColor: "#e8f3fa", 
                width: "85%", 
                my: "3rem", 
                py: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                justifyContent: "center", 
                border: "1px #cae7fc solid",
                borderRadius: "20px",
            }}>
            {isAuth ? (
              <Box sx={{width: "80%",}}>
                <Box>
                  <Typography variant='body1'>
                  Понимание своих способностей, интересов и желаний — <b>ключ к осознанному выбору будущего</b>. 
                  Знания позволяют нам не просто двигаться вперёд, а выбирать направление, которое приносит удовольствие и успех.
                  Когда ты понимаешь, в чём твоя сила, ты можешь строить карьеру, которая соответствует твоим ценностям и амбициям. 
                  Без этого люди часто оказываются в профессиях, которые не приносят радости, тратя годы на то, что им не близко. 
                  Осознанный подход к обучению и развитию открывает двери к возможностям, которые раньше казались недостижимыми. 
                  Твой потенциал огромен — главное, правильно его раскрыть!
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center"}}>
                  <Button variant='outlined' href='/proftest' sx={{my: 2}}>Профориентационный тест</Button>
                </Box>
              </Box>
            ) : (
              <Box sx={{
                textAlign: "center",
                width: "80%"
                }}>
                <Typography variant='h4' sx={{
                  
                  fontWeight: "600",
                  color: "#333",
                  px: "0.5rem"
                    }}> Найди свой путь к успеху! </Typography>
                  <Typography variant='h6' sx={{my:"1rem"}}>
                    Ты стоишь на пороге выбора будущей карьеры?
                    Наш профориентационный тест поможет тебе разобраться в своих сильных сторонах, интересах и скрытых талантах. 🚀
                    Получи персональные рекомендации и узнай, в каком направлении развиваться, чтобы достичь успеха!
                    Независимо от того, мечтаешь ли ты о программировании, аналитике данных или дизайне –
                    твой идеальный путь уже ждет тебя. Сделай первый шаг к будущему, в котором ты занимаешься любимым делом! 
                  </Typography>
                  <Typography sx={{my:"2rem"}}>*После регистрации, которая занимает меньше 1 минуты, тебе станет доступен профориентационный тест*</Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                  mt: 4,
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#1565c0' },
                  }}
                  href='/login'
                  >
                    Начать свой путь
              </Button>
            </Box>
          )}
          </Box>
        </Box>
      );
};

export default Home;