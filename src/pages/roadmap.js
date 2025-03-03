import React from 'react';
import { Button, CardContent, Box, Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Roadmap = ()  => {

    return (
      <Box sx={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"
      }}>
        <Grid container spacing={2} padding={8}>
          <Card>
            <CardContent sx={{justifyContent: 'center'}}>
              <Typography variant='h5' component="div">
                Backend-разработчик
              </Typography>
              <Typography variant='body2' color='text.secondary' marginY={2} id="mainText">
              <Typography variant="h6" gutterBottom>
                Backend-разработчик – кто это?
              </Typography>

              <Typography paragraph>
                Backend-разработчик отвечает за серверную часть веб-приложений. 
                Он разрабатывает логику, базы данных, API и интеграции, обеспечивая работу всего, что скрыто от пользователя.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Какие задачи решает?
              </Typography>

              <Typography component="ul" gutterBottom> 
                <li>Создаёт серверную логику (Python, Java, Node.js, Go, PHP, C#)</li>
                <li>Разрабатывает и оптимизирует базы данных (PostgreSQL, MySQL, MongoDB)</li>
                <li>Создаёт API для взаимодействия с фронтендом (REST, GraphQL, WebSockets)</li>
                <li>Работает с безопасностью (аутентификация, шифрование, защита данных)</li>
                <li>Настраивает серверы и деплой (Docker, Kubernetes, CI/CD)</li>
              </Typography>

              <Typography variant="h6" gutterBottom>
                Сколько учиться?
              </Typography>

              <Typography paragraph>
                ⏳ В среднем на освоение основ бэкенда уходит <b>6-12 месяцев</b>, если учиться регулярно. 
                Для уверенного <b>мидл-уровня</b> потребуется <b>1,5-2 года</b>.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Насколько востребован?
              </Typography>

              <Typography paragraph>
                🔥 Backend-разработчики <b>всегда нужны</b>, так как их работа критична для функционирования приложений. 
                В <b>2024-2025</b> годах спрос на backend остаётся <b>очень высоким</b> благодаря развитию веб-сервисов, мобильных приложений и облачных решений.
              </Typography>
              </Typography>
              <Button variant='contained' component={Link} to='backender'>Приступить</Button>
            </CardContent>
          </Card>
        </Grid>
        
      </Box> 
    );
};


export default Roadmap;