import React from "react";
import {useState} from "react";
import {Container, TextField,Button,IconButton} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {makeStyles} from ‘@mui/material/styles’;


const useStyles = makeStyles ((theme) => ({
    root: {
‘& .MuiTextFields-root’ : {
    margin: theme.spacing(1)
}
}
button: {
    margin: theme.spacing(1),

}
}))



const NewItemForm = () => {



    const[inputFields, setInputFields]=useState([
        { device:'',power:'', hours:'',days:''},
    ]);

    const handleSubmit =(e)=> {
        e.preventDefault();
    };

    const handleChangeInput =(index,event) => {
        const values = ["…inputFields"];
        values[index][event.target.name]=event.target.value;
        setInputFields(values);
    }

    const handleAddFields = ()=> {
        setInputFields(["…inputFields", { device:'',power:'', hours:'',days:''}])

    }

    const handleRemoveFields =(index) => {
        const values = ["…inputFields"];
        values.splice(index, 1);
        setInputFields(values);
    }


    return (
        <Container>
            <form className={classes.root} onSubmit={handleSubmit}>
                {inputFields.map((inputField, index) =>(
                    <div key={index}>
                        <TextField
                            name= "device"
                            label="Device"
                            variant="filled"
                            value={inputField.device}
                            onChange={event => handleChangeInput(index,event)}
                            />
                        <TextField
                            name="power"
                            label="Power"
                            variant="filled"
                            value={inputField.power}
                            onChange={event => handleChangeInput(index,event)}
                            />
                        <TextField
                            name="hours"
                            label="Hours"
                            variant="filled"
                            value ={inputField.hours}
                            onChange={event => handleChangeInput(index,event)}

                            />
                        <TextField
                            name="days"
                            label="Days"
                            variant="filled"
                            value ={inputField.days}
                            onChange={event => handleChangeInput(index,event)}

                            />
                        <IconButton>
                            <RemoveIcon>
                                onClick={() => handleRemoveFields(index)}>
                            </RemoveIcon>
                        </IconButton>
                        <IconButton>

                        <AddIcon>
                            onClick={() => handleAddFields()}>
                        </AddIcon>
                    </IconButton>

                    </div>
                    ))}

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >Policz</Button>

            </form>

        </Container>
    );
}







export default NewItemForm