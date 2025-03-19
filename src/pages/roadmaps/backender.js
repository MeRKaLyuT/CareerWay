import React from "react";
import roadmapData from '../../data/roadmap.json';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Box, Card, CardContent, Typography, Button, Grid} from '@mui/material';


const roadmaps = roadmapData.roadmaps;

const Backender = () => {
    const [openCard, setOpenCard] = useState({});
    
    const toggleCard = (id) => {
      setOpenCard((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };
  
      return (
        <Box sx={{
          display: 'flex',
          width: '100%',
          margin: 'auto',
          maxWidth: '600px',
          minHeight: '100vh',
          flexDirection: "column",
          flexGrow: 1
        }}>
        <Grid container spacing={2} padding={4} direction='column' >
          {roadmaps.map((roadmap) => (
            <Grid item key={roadmap.id} >
              <Card >
                <CardContent >
                  <Typography variant='h5' component="div">
                    {roadmap.title}
                  </Typography>
                    {!openCard[roadmap.id] ? (
                      <Typography variant='body2' color='text.secondary' marginY={2} id="mainText">
                        {roadmap.description}
                      </Typography>
                    ) : (
                      <>
                        {roadmap.items.map(item => (
                          <Box key={item.id} sx={{backgroundColor: '#fafafabb', borderRadius: '10px',}}>
                          <Typography variant='body2' color='text.secondary' marginY={2} id="mainText">
                            <b>{item.id}: {item.title}
                            </b><br/> 
                            {item.details.split(' ').map((word, index) => word.startsWith('http') ? (
                              <a key={index} href={word} target="_blank" rel="noopener noreferrer" 
                                style={{ color: 'gray', textDecoration: 'underline', marginRight: '5px' }}>
                                  {word}
                              </a> ) : (
                              <span key={index}>{word} </span>
                            ))}
                          </Typography>
                          </Box>
                        ))}
                      </>
                    )}
                    <Button variant='contained' color='primary' component={Link} onClick={() => 
                      toggleCard(roadmap.id)}>{openCard[roadmap.id] ? "Закрыть" : "Открыть"}
                    </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      );
};

export default Backender;