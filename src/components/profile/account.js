import React from "react";
import { Box, Typography } from "@mui/material";

const Account = ({username, email}) => {
    return (
        <Box className="mainProfile">
          <Box className="userBox">
            <Typography sx={{fontSize: "2rem"}}> Имя профиля: </Typography>
            <Typography className='userField' sx={{width: {xs: "100%", sm: "50%", md: "60%",lg: "50%" ,xl: "40%"}}}>
            {username}
            </Typography>
          </Box>
          <Box className="userBox">
            <Typography sx={{fontSize: "2rem"}}> Email: </Typography>
            <Typography className='userField' sx={{width: {xs: "100%", sm: "50%", md: "60%",lg: "50%" ,xl: "40%"}}}>
            {email}
            </Typography>
          </Box>
        </Box>
    );
}

export default Account;