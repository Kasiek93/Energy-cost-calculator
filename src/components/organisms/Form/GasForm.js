import React from "react";
import {Container, Paper, FormGroup, TextField,InputLabel,Select, MenuItem,Button,Grid} from "@mui/material";
import "./_GasForm.scss";



const NewItemForm = () => {
    return (
        <Paper squere elevation={2}>
            <Container maxWidth={"md"}>

                <div className = "form_gas">
                    <div className ="form_1_device">
                      <div className ="form_group_1">
                    <FormGroup>
                    <InputLabel>Urządzenie</InputLabel>
                    <Select>
                        <MenuItem value={"kociol"}>Kocioł gazowy</MenuItem>
                        <MenuItem value={"kuchenka"}>Kuchenka gazowa</MenuItem>
                    </Select>
                </FormGroup>
                      </div>
                    <div className ="form_group_power_1">

                        <FormGroup>
                            <Grid item xs={2} >
                                <InputLabel>Moc</InputLabel>
                                <TextField
                                />
                            </Grid>
                        </FormGroup>
                    </div>
                    <div className ="form_group_hours_1">
                        <FormGroup>
                            <Grid item xs={2} >
                                <InputLabel>Liczba godzin pracy w ciągu dnia</InputLabel>
                                <TextField/>
                            </Grid>
                        </FormGroup>
                    </div>
                    <div className ="form_group_days_1">
                        <FormGroup>
                            <Grid item xs={2} >
                                <InputLabel>Ilość dni w miesiącu</InputLabel>
                                <TextField/>
                            </Grid>
                        </FormGroup>
                    </div>
                    </div>

                    <div className ="form_2_device">
                        <div className ="form_group_2">
                    <FormGroup>
                        <InputLabel>Urządzenie</InputLabel>
                        <Select>
                            <MenuItem value={"kociol"}>Kocioł gazowy</MenuItem>
                            <MenuItem value={"kuchenka"}>Kuchenka gazowa</MenuItem>
                        </Select>
                    </FormGroup>
                       </div>
                        <div className ="form_group_power_2">
                            <FormGroup>
                          <Grid item xs={2} >
                          <InputLabel>Moc</InputLabel>
                          <TextField/>
                          </Grid>
                    </FormGroup>
                    </div>
                        <div className ="form_group_hours_2">

                           <FormGroup>
                           <Grid item xs={2} >
                           <InputLabel>Liczba godzin pracy w ciągu dnia</InputLabel>
                           <TextField/>
                           </Grid>
                            </FormGroup>
                          </div>

                    <div className ="form_group_days_2">
                    <FormGroup>
                        <Grid item xs={2} >
                        <InputLabel>Ilość dni w miesiącu</InputLabel>
                        <TextField/>
                        </Grid>
                    </FormGroup>

                    </div>
                    </div>
                    <Button variant="contained" color="primary">Dodaj</Button>

                </div>

            </Container>
        </Paper>
    );
}
export default NewItemForm