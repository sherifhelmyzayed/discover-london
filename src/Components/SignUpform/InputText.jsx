import TextField from '@mui/material/TextField';

const InputText = (props)=>{
    return (
        <TextField fullWidth 
                    helperText={props.text }
                    error={props.vaild  }
                    label={props.feild } 
                    size="small"
                    name={props.name} 
                    onBlur = {props.blur}
                    onChange={props.change}
                    value={props.val}
                    typr ={props.type}
                    multiline = {props.mult}
                    maxRows={3}
/> 

    )
}

export default InputText