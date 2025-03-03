import React from "react";
import { Button } from "@mui/material";

export const BtnRoadmap = ({text, href}) => {
    return (
        <Button href={href} variant='contained' size='large' sx={{
            backgroundColor: "#142d4c", 
            color: "white",
            }}
            >
              {text}
            </Button>
    );
};