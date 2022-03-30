import { useState } from 'react';
import * as React from 'react';
import Link from 'next/link';
import { Box, Typography, TextField, Button, Container, Grid, InputAdornment, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const MainQuestion = ({ mediaField, title, body, expired, id, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={5} component="main" direction="column" alignItems="center" className="main-question">
                <Grid item >
                    <Typography variant="h4" className="question-body">{title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" className="question-body">Question {id}: {body}</Typography>
                </Grid>
                <Grid item>
                    {mediaField &&

                        <img className="question-image" src={mediaField} />
                    }
                </Grid>
                {/*  if question exprired, then show answer button */}
                {expired ?
                    !showAnswer &&
                    <Grid item>
                        <Button variant="contained" align="center" className="show-answer-button" onClick={() => { setShowAnswer(true) }}>Show Answer</Button>
                    </Grid>
                    : <Grid item>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                InputProps={{ endAdornment: <InputAdornment position="end"><MailOutlineIcon /></InputAdornment> }}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Carleton Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="answer"
                                label="Your Answer"
                                type="text"
                                id="answer"
                            />
                            {/* TODO STYLE BUTTON */}
                            <Button
                                size="large"
                                type="submit"
                                variant="contained"
                                sx={{ my: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                }
                {showAnswer &&
                    <p>Answer: {answer}</p>
                }
            </Grid>
        </Container>
    )

};


export { MainQuestion };
