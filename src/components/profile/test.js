import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Test = ({testHistory}) => {
    return (
        <Box sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            py: 5,
            background: "linear-gradient(135deg, #00416A 0%, #00C9FF 100%)",
            color: "white",
            
            alignItems: "center",
        }}>
          <Typography textAlign="center">
            <Typography sx={{fontWeight: "500", fontSize: "20px"}}>
                Твой результат профориентационного теста: 
            </Typography>
             {Object.entries(testHistory).map(([key, value]) => (
               <Typography key={key} sx={{justifyContent: "center", display: "flex", pt:1}}>
                 {key}: {value}
               </Typography>
             ))}
           </Typography> 
           <Button href="/proftest" variant="contained" color="secondary" sx={{my: "1rem"}}>Пройти тест еще раз?</Button>
        </Box>
    );
}

export default Test;
