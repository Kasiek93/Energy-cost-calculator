import React from "react";
import {Container, Paper, FormGroup, TextField,InputLabel,Select, MenuItem,Button} from "@mui/material";


const NewItemForm = () => {




    return (
        <Paper squere elevation={2}>
            <Container maxWidth={"md"}>
                <form>
                <FormGroup>
                    <InputLabel>Urządzenie</InputLabel>
                    <Select>
                        <MenuItem value={"kociol"}>Kocioł gazowy</MenuItem>
                        <MenuItem value={"kuchenka"}>Kuchenka gazowa</MenuItem>
                    </Select>
                </FormGroup>
                    <FormGroup>
                        <InputLabel>Urządzenie</InputLabel>
                        <Select>
                            <MenuItem value={"kociol"}>Kocioł gazowy</MenuItem>
                            <MenuItem value={"kuchenka"}>Kuchenka gazowa</MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Moc</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Moc</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Liczba godzin pracy w ciągu dnia</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Liczba godzin pracy w ciągu dnia</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Ilość dni w miesiącu</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Ilość dni w miesiącu</InputLabel>
                        <TextField/>
                    </FormGroup>

                    <Button variant="contained" color="primary">Dodaj</Button>
                </form>
            </Container>
        </Paper>
    );
}
export default NewItemForm