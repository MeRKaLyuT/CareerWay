// mui
import { Box, Typography, Button, Divider } from "@mui/material";
// other
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, calculateResult, resetTest } from "../redux/reducers/testReducer";
import axios from "axios";


const ProfTest = () => {

    const dispatch = useDispatch();
    const { questions, currentQuestion, testCompleted, result } = useSelector((state) => state.test);

    let maxCategory;
    let secondCategory;

    const token = localStorage.getItem('access'); 

    const sendTest = async (token, result) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/proftest/",
                { test_results: result},
                { headers: {Authorization: `Bearer ${token}`}}
            );
            console.log("test saved successfully!", response.data); // delete this after testing
        } catch (error) {
            // console.error("nope nope");
        }
    };

    if (result) {

        sendTest(token, result);

        const sortedCategories = Object.entries(result).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);
        
        maxCategory = sortedCategories[0][0];
        secondCategory = sortedCategories[1] ? sortedCategories[1][0] : null;
    }

    if (testCompleted) {
        return( 
            <Box sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                p: 5,
                background: "linear-gradient(135deg, #00416A 0%, #00C9FF 100%)",
                color: "white",
                height: "100vh",
                alignItems: "center",
            }}>
                <Box sx={{border: "solid white 2px", borderRadius: "10px", p: 5}}>
                <Typography variant="h4" sx={{my: 2}}> Ваши результаты: </Typography>

                {(result) ? (
                    <Box>
                        <Typography>
                            Вы набрали наибольший балл в категории <b>{maxCategory}</b>
                        </Typography>
                        <Typography>
                            Второй по величине результат <b>{secondCategory}</b>
                        </Typography>
                        <Box>
                            <Typography py={2}>
                                Полную статистику можете увидеть ниже:
                            </Typography>
                            {Object.entries(result).map(([category, score]) => (
                                <Typography key={category}>
                                    <b>{category}: {score} </b> баллов
                                </Typography>
                            ))}
                        </Box>
                        <Button sx={{mt: 3, background: "white", color: "black"}} variant="contained" href="/profile">Уйти</Button>
                    </Box>
                ) : (<></>)}
                <Button sx={{mt: 3, background: "white", color: "black"}} variant="contained" 
                onClick={() => {dispatch(resetTest());}}> Пройти тест заново</Button>
                </Box>
            </Box>
        );
    }

    const question = questions[currentQuestion];

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            background: "linear-gradient(135deg, #00416A 0%, #00C9FF 100%)",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Box sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: "100%",
                mt: 5,
            }}>
                <Typography variant="h3" sx={{
                    color: "white",
                    fontFamily: "monospace",
                    textAlign: "center",
                }}>
                    Тест: Какая IT профессия мне подходит?
                </Typography>
            </Box>
            
            <Box sx={{textAlign: "center", py: 5}}>
                <Typography variant="h4" sx={{color: "white"}}>{question.question}</Typography>
            </Box>
            <Box sx={{mb: 5, width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            {question.options.map((option, index) => (
                <Box key={index} sx={{alignItems: "center", display: "flex", width: "80%"}}>
                    <Divider sx={{flexGrow: 1, borderColor: "white"}}/>
                    <Button sx={{
                        display: "block",
                        mt: 2,
                        border: "solid white 1px",
                        borderRadius: "10px",
                        color: "black",
                        backgroundColor: "white",
                        width: "70%",
                    }} onClick={() => {
                        dispatch(answerQuestion({questionId: question.id, scores: option.scores}));
                        if (currentQuestion === questions.length - 1) {
                            dispatch(calculateResult());
                        }
                    }}
                    >
                        {option.text}
                    </Button>
                    <Divider sx={{flexGrow: 1, borderColor: "white"}}/>
                </Box>
                ))}
            </Box>
            <Box sx={{
                border: "solid white 1px",
                borderRadius: "20px",
                width: "60%",
                p: 5,
                mb: 9,
                mt: 4,
                background: "rgba(0, 0, 0, 0.2)"
            }}>
                <Typography variant="h6" color="white" sx={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"}}>
                    Интересный факт: Исследования показывают, что до 80% людей в той или иной степени недовольны
                    своей профессией и мечтают сменить работу. Это происходит потому, что многие выбирают карьеру под 
                    влиянием родителей, общества или случайности, а не на основе своих реальных интересов и талантов. 
                    Осознанный выбор профессии с учётом своих сильных сторон и увлечений значительно повышает шансы на успешную
                    и счастливую жизнь! 
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfTest;
